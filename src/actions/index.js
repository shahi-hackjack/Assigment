import * as types from './actionTypes';

export function fetchProfileAction() {
    //Api call to Redux Saga for Profile Fetch
    return {
        type: types.FETCH_PROFILE
    }
}


export function fetchRepositoriesAction() {
    //Api call to Redux Saga for Repositories Fetch
    return {
        type: types.FETCH_REPOSITORIES
    }
}
