import React from 'react'
import { connect } from 'react-redux'

function NameContainer({ user }) {
    return (
        <div>
            <p>Your name: {user.name} --- </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: {
            name: state.name
        }
    }
}

export default connect(mapStateToProps)(NameContainer)