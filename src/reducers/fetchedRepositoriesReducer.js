import * as types from '../actions/actionTypes'
const data = {
    data: null
}

export default function(state = data, action) {
    switch (action.type) {

        case types.FETCHED_REPOSITORIES:
                return Object.assign({}, state, {data: action.data})
                break;
        default:
                return state
    }
}
