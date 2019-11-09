import { combineReducers } from 'redux';
import contatoReducer from './contato-reducer'
import cursoReducer from './curso-reducer'

const reducer = combineReducers({
    contato : contatoReducer,
    curso : cursoReducer
})

export default reducer