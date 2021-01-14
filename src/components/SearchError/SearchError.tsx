import { TElement, TPokedexContext } from '../../types'

import Divider from '../Divider'
import { Link } from 'react-router-dom'
import Pill from '../Pill'
import { PokedexContext } from '../../context/'
import styles from './SearchError.module.css'
import { useContext } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SearchError = (): TElement => {
   const { currentPokedex } = useContext(PokedexContext) as TPokedexContext
   return (
      <div className={styles.container}>
         <section>
            search error on: <i>{currentPokedex}</i>
         </section>
         <Divider />
         <Pill dark>
            <Link to="/">Back to home page</Link>
         </Pill>
      </div>
   )
}

export default SearchError
