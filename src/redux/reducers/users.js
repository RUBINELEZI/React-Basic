const userReduser = (state = [], action) => {
    switch(action.type){
        case 'Category':
            state = action.payload
            debugger
            return state
        case 'dropdownCategory':
            return state.filter(user => user.title === action.payload)
        default:
            return state
    }
}

export default userReduser;