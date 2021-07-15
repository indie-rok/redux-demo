import React from 'react'

export default function FavoriteFoodContainer({ user }) {
    return (
        <div>
            <p>Favorite food: {user.favoriteFood}</p>
        </div>
    )
}
