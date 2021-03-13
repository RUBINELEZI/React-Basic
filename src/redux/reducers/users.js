const userReduser = (state = [], action) => {
    switch(action.type){
        case 'Category':
            state = action.payload
            return state
        default:
            return state
    }
}

export default userReduser;