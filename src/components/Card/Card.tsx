import { TElement, TPokemon } from '../../types'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import Pill from '../Pill'
import skeleton from '../../assets/static/skeleton.gif'
import styles from './Card.module.css'
import useFetch from '../../hooks/useFetch'

const Card = ({ name, url }: TPokemon): TElement => {
   const { isLoading, data } = useFetch(url)
   const [type, setType] = useState([])
   const [pokedexNumber, setPokedexNumber] = useState(0)
   const [frontDefaultImage, setFrontDefaultImage] = useState('')

   const handleSetData = (): void => {
      data.sprites ? setFrontDefaultImage(data.sprites.front_default) : skeleton

      setType(data.types)
      setPokedexNumber(data.id)
   }

   useEffect(() => {
      handleSetData()
   }, [data])
   console.log(frontDefaultImage)
   return (
      <div className={styles.card}>
         {isLoading ? (
            <img src={skeleton} alt="Loading" />
         ) : (
            <Link className={styles.container} to={`/pokemon/${pokedexNumber}`}>
               <div className={styles.image}>
                  <img src={frontDefaultImage} alt={name} />
               </div>
               <Pill>
                  Pokedex Number: <strong>#{pokedexNumber}</strong>
               </Pill>
               <div className={styles.divider}></div>
               <h2 className={styles.title}>{name}</h2>
               <div>
                  {type.map(({ type }: any, index: number) => (
                     <Pill dark={true} key={`${type.name} ${index}`}>
                        {type.name}
                     </Pill>
                  ))}
               </div>
            </Link>
         )}
      </div>
   )
}

export default Card
