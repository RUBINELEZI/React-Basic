const btnReduser = (state = false, action) => {
    switch(action.type){
        case 'btn':
            state = action.payload
            return state
        case 'btnClick':
            state = !action.payload
            return state
        default:
            return state
    }
}

export default btnReduser;