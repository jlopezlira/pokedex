import { TElement, TPokemonID } from '../../types'

import { useParams } from 'react-router-dom'

const Profile = (): TElement => {
   const { id }: TPokemonID = useParams()

   return (
      <div>
         <h1>Details {id}</h1>
      </div>
   )
}

export default Profile
