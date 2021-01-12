import { TElement, TPokedexContext } from '../../types'
import { useContext, useState } from 'react'

import { PokedexContext } from '../../context/'
import styles from './Search.module.css'
import { useHistory } from 'react-router-dom'

const Search = (): TElement => {
   const { currentPokedex, savePokedex } = useContext(
      PokedexContext,
   ) as TPokedexContext
   const history = useHistory()
   const [query, setQuery] = useState('')
   const [hasError, setHasError] = useState(false)
   const [showMessage, setShowMessage] = useState(false)
   const handlerSearch = (e: any) => {
      const queryParams = e.target.value
      setQuery(queryParams)
      if (queryParams.trim() !== '') {
         setHasError(false)
      } else {
         setHasError(true)
      }
   }

   const handleSubmit = () => {
      if (hasError) {
         setShowMessage(true)
      } else {
         savePokedex(query)
         const redirect = `/pokemon/${currentPokedex}`
         history.replace(redirect)
         history.push(redirect)
      }
   }

   const title = 'Find your pokemon by its Name or Pokedex Number'
   const cta = 'Go!'
   return (
      <div className={styles.search}>
         {showMessage && <div>error</div>}
         <div className={styles.field}>
            <span className="fas fa-search"></span>
            <input
               onChange={handlerSearch}
               type="text"
               required
               placeholder={title}
            />
         </div>
         <button onClick={handleSubmit} className={styles.button}>
            {cta}
         </button>
         {currentPokedex}
      </div>
   )
}

export default Search
