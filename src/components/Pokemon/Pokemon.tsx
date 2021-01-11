import { TElement, TPokemon } from '../../types'

const Pokemon = (details: TPokemon): TElement => {
   console.table(details)
   const { name, id } = details
   return (
      <div>
         <ul>
            <li>{id}</li>
            <li>{name}</li>
         </ul>
      </div>
   )
}

export default Pokemon
