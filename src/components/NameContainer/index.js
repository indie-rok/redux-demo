import React from 'react'

export default function NameContainer({ user }) {
    return (
        <div>
            <p>Your name: {user.name} --- </p>
        </div>
    )
}
