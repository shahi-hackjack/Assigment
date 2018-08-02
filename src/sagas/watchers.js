import { takeLatest,takeEvery } from 'redux-saga/effects'
import {fetchProfileSaga} from './fetchProfileSaga'
import {fetchRepositoriesSaga} from './fetchRepositoriesSaga'
import * as types from '../actions/actionTypes'
//This Saga Watchers for the actions
export function* fetchProfileWatcher()
{
           yield takeLatest(types.FETCH_PROFILE ,fetchProfileSaga)
}

export function* fetchRepositoriesWatcher()
{
           yield takeLatest(types.FETCH_REPOSITORIES ,fetchRepositoriesSaga)
}
