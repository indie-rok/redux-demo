import React from 'react'
import { connect } from 'react-redux'

function Content({ setUser, myProp, updateFood }) {
    return (
        <div>

            <hr />

            <article>
                My content
            </article>

            <p>Change favorite food</p>

            <input onChange={event => myProp(event.target.value)} />

            <button onClick={() => myProp()}>Change Food</button> {/*/ undefined because we don't pass any arguments */}

            <button onClick={() => updateFood()}>Change Name</button>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        myProp: (myFood) => {
            const action = { type: 'UPDATE_FAVORITE_FOOD', payload: myFood }
            dispatch(action)
        },
        updateFood: (name) => {
            const action = { type:'UPDATE_NAME', payload: 'Mark' }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Content)