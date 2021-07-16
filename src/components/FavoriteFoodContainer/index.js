import React from 'react'

import {connect} from 'react-redux'

function FavoriteFoodContainer({ user }) {
    return (
        <div>
            <p>Favorite food: {user.favoriteFood}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        user:{
            favoriteFood: state.favoriteFood
        }
    })
}

export default connect(mapStateToProps)(FavoriteFoodContainer)