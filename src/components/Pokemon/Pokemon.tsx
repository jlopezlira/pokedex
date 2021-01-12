import { TElement, TPokemon } from '../../types'

import Divider from '../Divider'
import Image from '../Image'
import { Link } from 'react-router-dom'
import Pill from '../Pill'
import placeholderImage from '../../assets/static/skeleton.gif'
import styles from './Pokemon.module.css'

const Pokemon = (details: TPokemon): TElement => {
   const { height, name, id, weight, image, types, abilities } = details
   const mainImage = image.url || placeholderImage
   const getNavigation = () => {
      return (
         <nav>
            <Pill dark>
               <Link to="/">Back to List</Link>
            </Pill>
         </nav>
      )
   }

   return (
      <div className={styles.container}>
         <div className={styles.info}>
            <Image url={mainImage} />
            <h2 className={styles.title}>{name}</h2>
            <Divider />
            <Pill dark>Pokedex Number: {id}</Pill>
            <Divider />
            {getNavigation()}
         </div>
         <div className={styles.info}>
            <h2>Aspect</h2>
            <Divider />
            <Pill>Height: {height}</Pill>
            <Pill>Weight: {weight}</Pill>
         </div>
         <div className={styles.info}>
            <h2>Types</h2>
            <Divider />
            {types.map((type, i) => (
               <Pill dark key={i}>
                  {type.name}
               </Pill>
            ))}
         </div>
         <div className={styles.info}>
            <h2>Ability</h2>
            <Divider />
            {abilities.map((ability, i) => (
               <Pill dark key={i}>
                  {ability.name}
               </Pill>
            ))}
         </div>
      </div>
   )
}

export default Pokemon
