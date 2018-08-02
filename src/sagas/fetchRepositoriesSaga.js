import { put, call } from 'redux-saga/effects'
import {fetchRepositoriesAPI} from '../api/fetchApi';
import * as types from '../actions/actionTypes'

export function * fetchRepositoriesSaga()
{
        let apiResponse=yield call(fetchRepositoriesAPI)
        if(apiResponse)
                {
                  yield put({type:types.FETCHED_REPOSITORIES,data:apiResponse})
                }
}
