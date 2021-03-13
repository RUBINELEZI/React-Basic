const searchReduser = (state = '', action) => {
    switch(action.type){
        case 'Search':
            state = action.payload
            return state
        default:
            return state
    }
}

export default searchReduser;