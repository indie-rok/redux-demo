import React from 'react'

export default function Content({ setUser }) {
    return (
        <div>

            <hr />

            <article>
                My content
            </article>

            <p>Change favorite food</p>

            <button onClick={_ => setUser({ favoriteFood: 'p2' })}>Change Food</button>

        </div>
    )
}
