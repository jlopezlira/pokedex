import { TAbility, TElement, TPokedex, TPokemon } from '../../types'

import Loader from '../../components/Loader'
import Pokemon from '../../components/Pokemon'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const Profile = (): TElement => {
   const { pokedex }: TPokedex = useParams()
   const url = `https://pokeapi.co/api/v2/pokemon/${pokedex}`
   const { isLoading, data } = useFetch(url)
   const [abilities, setAbilities] = useState([])

   const pokemon: TPokemon = {
      id: data.id,
      name: data.name,
      abilities,
   }

   return <div>{isLoading ? <Loader /> : <Pokemon {...pokemon} />}</div>
}

export default Profile
