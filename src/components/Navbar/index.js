import React from 'react'
import Avatar from '../Avatar'

export default function Navbar({user}) {

    return (
        <div>
            <Avatar user={user} />
        </div>
    )
}
