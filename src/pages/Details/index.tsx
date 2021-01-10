import { TJSXElement, TPokemonID } from '../../types'

import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = (): TJSXElement => {
    const { id }: TPokemonID = useParams()

    return (
        <div>
            <h1>Details {id}</h1>
        </div>
    );
}

export default Profile;
