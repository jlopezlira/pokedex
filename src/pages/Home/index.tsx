import ListOfPokemon from '../../components/ListOfPokemon'
import { TJSXElement } from '../../types'
import useFetch from '../../hooks/useFetch'

const Home = (): TJSXElement => {
    const url = 'pokemon'
    const { isLoading, data } = useFetch(url)
    return (
        <div>
            <h1>Home</h1>
            {
                isLoading ? 'Loading...' : <ListOfPokemon list={data.results} />
            }
        </div>
    );
}

export default Home;
