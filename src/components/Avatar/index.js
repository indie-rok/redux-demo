import React from 'react'
import NameContainer from '../NameContainer'
import FavoriteFoodContainer from '../FavoriteFoodContainer'

export default function Avatar({ user }) {
    return (
        <div style={{display:'flex'}}>
            <NameContainer user={user} />
            <FavoriteFoodContainer user={user} />
        </div>
    )
}
