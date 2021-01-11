import ListOfPokemon from '../../components/ListOfPokemon/ListOfPokemon'
import { TElement } from '../../types'
import styles from './Home.module.css'

const Home = (): TElement => (
   <div className={styles.container}>
      <ListOfPokemon />
   </div>
)

export default Home
