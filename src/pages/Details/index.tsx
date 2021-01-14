import { TElement, TPokedex, TPokedexContext, TPokemon } from '../../types'
import { useContext, useEffect, useState } from 'react'

import Loader from '../../components/Loader'
import { PokedexContext } from '../../context/'
import Pokemon from '../../components/Pokemon'
import SearchError from '../../components/SearchError'
import placeholderImage from '../../assets/static/skeleton.gif'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Profile = (): TElement => {
   const { currentPokedex, savePokedex } = useContext(
      PokedexContext,
   ) as TPokedexContext
   const { pokedex }: TPokedex = useParams()

   const handlePokedex = (): void => {
      const pd = pokedex || currentPokedex
      if (pokedex !== currentPokedex || currentPokedex === '') {
         savePokedex(pd)
      }
   }

   const { isLoading, data, updateUrl, hasError } = useFetch(
      `https://pokeapi.co/api/v2/pokemon/${currentPokedex}`,
   )

   const [abilities, setAbilities] = useState([])
   const [types, setTypes] = useState([])
   const [images, setImages] = useState('')

   const handleAbilities = () => {
      const newAbility: any = []
      if (data.abilities !== undefined) {
         for (let i = 0; i < data.abilities.length; i++) {
            newAbility[i] = { ...data.abilities[i].ability }
         }
      }
      setAbilities(newAbility)
   }

   const handleTypes = () => {
      const newTypes: any = []
      if (data.types !== undefined) {
         for (let i = 0; i < data.types.length; i++) {
            newTypes[i] = data.types[i].type
         }
      }
      setTypes(newTypes)
   }

   const handleImages = () => {
      if (data.sprites !== undefined) {
         const mainImage: any = data.sprites.front_default ?? placeholderImage
         setImages(mainImage)
      }
   }

   useEffect(() => {
      handleAbilities()
      handleTypes()
      handleImages()
      handlePokedex()
      updateUrl(`https://pokeapi.co/api/v2/pokemon/${currentPokedex}`)
   }, [isLoading, data, currentPokedex, pokedex])

   const pokemon: TPokemon = {
      id: data.id,
      url: data.url,
      experience: data.experience,
      name: data.name,
      height: data.height,
      weight: data.weight,
      abilities,
      types,
      images,
   }

   return (
      <>
         {isLoading ? (
            <Loader />
         ) : hasError ? (
            <SearchError />
         ) : (
            <Pokemon {...pokemon} />
         )}
      </>
   )
}

export default Profile
