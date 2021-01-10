import { TJSXElement, TPokemonList } from "../../types";

import Card from '../Card'

const ListOfPokemon = ({ list }: TPokemonList): TJSXElement => {
    return (
        <>
            {
                list.map((pokemon, index) => <Card name={pokemon.name} url={pokemon.url} key={pokemon.name + index} />)
            }
        </>
    )
}

export default ListOfPokemon;
