import { TElement, TPokemon, TPokemonList } from '../../types'

import Card from '../Card'
import useFetch from '../../hooks/useFetch'

const ListOfPokemon = (): TElement => {
   const { isLoading, data } = useFetch('pokemon/')
   const results: TPokemonList = data.results || []

   return (
      <>
         {isLoading
            ? 'Loading...'
            : results.map((pokemon: TPokemon, index: number) => (
                 <Card
                    name={pokemon.name}
                    url={pokemon.url}
                    key={pokemon.name + index}
                 />
              ))}
      </>
   )
}

export default ListOfPokemon
