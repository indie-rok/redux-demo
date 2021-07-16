import { createStore } from 'redux'

const reducer = (state, action) => {
    console.log('my action coming in:', action)
    switch (action.type) {
        case 'UPDATE_NAME':
            return { ...state, name: action.payload }
        case 'UPDATE_FAVORITE_FOOD':
            return { ...state, favoriteFood: action.payload }
        default:
            return state
    }
}

export default createStore(
    reducer, // reducer that tells how to process our actions
    { name: 'John', favoriteFood: 'Burgers' }, // initial state
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //line to make reduxDevTools work
)