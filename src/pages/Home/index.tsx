import { TElement, TPokemonList } from '../../types'

import ListOfPokemon from '../../components/ListOfPokemon'
import useFetch from '../../hooks/useFetch'

const Home = (): TElement => {
    const { isLoading, data } = useFetch('pokemon/')
    const results: TPokemonList = data.results || []
    return (
        <div>
            {
                isLoading
                    ? 'Loading...'
                    : <ListOfPokemon results={results} />
            }
        </div>
    );
}

export default Home;
