import { put, call } from 'redux-saga/effects'
import {fetchProfileAPI} from '../api/fetchApi';
import * as types from '../actions/actionTypes'

export function * fetchProfileSaga()
{
        let apiResponse=yield call(fetchProfileAPI)
        if(apiResponse)
                {
                  yield put({type:types.FETCHED_PROFILE,data:apiResponse})
                }
}
