import userReduser from './users'
import searchReduser from './searchField'
import btnReduser  from "./displayState";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    user: userReduser,
    searchValue: searchReduser,
    btn: btnReduser
})

export default allReducers;