import {createStore} from 'redux'
import {reducers} from './reducers/'
//re-export
export const store = createStore(reducers)


