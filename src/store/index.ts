import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducerCarrinho from './ducks/Carrinho'

const createRootReducer = () => combineReducers({
    carrinho: reducerCarrinho
})

const store = createStore( createRootReducer(), composeWithDevTools())

export { store }