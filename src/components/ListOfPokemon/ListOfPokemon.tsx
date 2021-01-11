import { TElement, TPokemon, TPokemonList } from '../../types'

import Card from '../Card'
import Loader from '../Loader'
import useFetch from '../../hooks/useFetch'

const ListOfPokemon = (): TElement => {
   const { isLoading, data } = useFetch('https://pokeapi.co/api/v2/pokemon/')
   const results: TPokemonList = data.results || []

   return (
      <>
         {isLoading ? (
            <Loader />
         ) : (
            results.map((pokemon: TPokemon, index: number) => (
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
