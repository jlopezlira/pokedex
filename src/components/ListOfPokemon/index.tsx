import { TElement, TEmpty, TPokemon, TPokemonList } from '../../types';

import Card from '../Card';

const ListOfPokemon = ({ results }: TPokemonList | TEmpty): TElement => {
	return (
		<>
			{results.map((pokemon: TPokemon, index: number) => (
				<Card name={pokemon.name} url={pokemon.url} key={pokemon.name + index} />
			))}
		</>
	);
};

export default ListOfPokemon;
