import { TElement, TPokemon } from '../../types'
import { useEffect, useState } from 'react'

import Divider from '../Divider'
import { Link } from 'react-router-dom'
import Pill from '../Pill'
import skeleton from '../../assets/static/skeleton.gif'
import styles from './Card.module.css'
import useFetch from '../../hooks/useFetch'

const Card = ({ name, url }: TPokemon): TElement => {
   const resource = url
   const { isLoading, data } = useFetch(resource)
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
               <Divider />
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
