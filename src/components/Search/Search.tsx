import { TElement } from '../../types'
import styles from './Search.module.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const Search = (): TElement => {
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
      hasError ? setShowMessage(true) : history.push(`/pokemon/${query}`)
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
      </div>
   )
}

export default Search
