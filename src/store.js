import reducer from './reducers/reducers'
import {createStore} from 'redux'

const initialState = {
    name: 'Mina'
  }

export const store = createStore(reducer, initialState);
