import { fork } from 'redux-saga/effects'
import {fetchProfileWatcher,fetchRepositoriesWatcher} from './watchers';
//This Forks the watchers //It is master Saga
export default function* startForman()
 {
     yield [
         fork(fetchProfileWatcher),
         fork(fetchRepositoriesWatcher)
     ]
 }
