const initialState = {
    message: 'Please subscribe'
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if (action.type === 'Message change') {
        newState.message = 'Thank you'
    }

    return newState
}

export default reducer;