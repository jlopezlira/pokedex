import { TElement, TPokemon } from '../../types'

import Divider from '../Divider'
import Image from '../Image'
import { Link } from 'react-router-dom'
import Pill from '../Pill'
import Title from '../Title'
import styles from './Pokemon.module.css'

const Pokemon = (details: TPokemon): TElement => {
   const { height, name, id, weight, images, types, abilities } = details
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
            <Image image={images} />
            <Title>{name}</Title>
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
            <Title>Types</Title>
            <Divider />
            {types.map((type, i) => (
               <Pill dark key={i}>
                  {type.name}
               </Pill>
            ))}
         </div>
         <div className={styles.info}>
            <Title>Ability</Title>
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
