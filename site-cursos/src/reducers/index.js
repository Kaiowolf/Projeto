import { combineReducers } from 'redux';
import contatoReducer from './contato-reducer'

const reducer = combineReducers({
    contato : contatoReducer
})

export default reducer