import { TCard, TElement } from '../../types'
import { useEffect, useState } from 'react'

import Divider from '../Divider'
import Image from '../Image'
import { Link } from 'react-router-dom'
import Loader from '../Loader'
import Pill from '../Pill'
import Title from '../Title'
import skeleton from '../../assets/static/skeleton.gif'
import styles from './Card.module.css'
import useFetch from '../../hooks/useFetch'

const Card = ({ name, url }: TCard): TElement => {
   const resource: string = url || ''
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
            <Loader />
         ) : (
            <Link className={styles.container} to={`/pokemon/${pokedexNumber}`}>
               <Image image={frontDefaultImage} />
               <Pill>
                  Pokedex Number: <strong>#{pokedexNumber}</strong>
               </Pill>
               <Divider />
               <Title>{name}</Title>
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
