import Button from '../Button'
import { TElement } from '../../types'
import TextInput from '../TextInput'
import styles from './Search.module.css'

const Search = (): TElement => {
   const title = 'Find your pokemon by its Name or Pokedex Number'
   const cta = 'Go!'
   return (
      <div className={styles.search}>
         <TextInput label={title} />
         <Button label={cta} />
      </div>
   )
}

export default Search
