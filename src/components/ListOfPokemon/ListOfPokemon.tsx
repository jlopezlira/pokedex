import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { TCard, TElement, TPokemonList } from '../../types'
import { useEffect, useState } from 'react'

import Card from '../Card'
import Loader from '../Loader'
import styles from './ListOfPokemon.module.css'
import useFetch from '../../hooks/useFetch'

const ListOfPokemon = (): TElement => {
   const { isLoading, data, updateUrl } = useFetch(
      'https://pokeapi.co/api/v2/pokemon/',
   )
   const results: TPokemonList = data.results || []
   const [nextPage, setNextPage] = useState('')
   const [prevPage, setPrevPage] = useState('')

   const paginator = () => {
      return (
         <>
            {prevPage && (
               <button
                  className={styles.prevPage}
                  onClick={() => updateUrl(prevPage)}
               >
                  <i className="fas fa-angle-left"></i>
               </button>
            )}
            {
               <button
                  className={styles.nextPage}
                  onClick={() => updateUrl(nextPage)}
               >
                  <i className="fas fa-angle-right"></i>
               </button>
            }
         </>
      )
   }

   useEffect(() => {
      data.next ? setNextPage(data.next) : setNextPage('')
      data.previous ? setPrevPage(data.previous) : setPrevPage('')
   }, [data])

   return (
      <>
         {paginator()}
         {isLoading ? (
            <Loader />
         ) : (
            results.map((pokemon: TCard, index: number) => (
               <Card
                  name={pokemon.name}
                  url={pokemon.url}
                  key={pokemon.name + index}
               />
            ))
         )}
      </>
   )
}

export default ListOfPokemon
