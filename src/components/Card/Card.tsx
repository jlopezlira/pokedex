import { TElement, TPokemon } from '../../types'
import { useEffect, useState } from 'react'

import skeleton from '../../assets/static/skeleton.gif'
import styles from './Card.module.css'
import useFetch from '../../hooks/useFetch'

const Card = ({ name, url }: TPokemon): TElement => {
   const { isLoading, data } = useFetch(url)
   const [type, setType] = useState([])
   const [pokedexNumber, setPokedexNumber] = useState(0)

   useEffect(() => {
      setType(data.types)
      setPokedexNumber(data.id)
   }, [data])

   console.log(type)
   return (
      <div className={styles.card}>
         {isLoading ? (
            <img src={skeleton} alt="Loading" />
         ) : (
            <div>
               <h2>{name}</h2>
               <h3>Pokedex Number: #{pokedexNumber}</h3>
               <ul>
                  {type.map(({ type }: any, index: number) => (
                     <li key={`${type.name} ${index}`}>{type.name}</li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   )
}

export default Card
