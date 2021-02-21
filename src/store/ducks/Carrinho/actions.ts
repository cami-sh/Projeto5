import { action } from 'typesafe-actions'
import { TypesCarrinho , Item} from './types'

export const newItem = (payload: Item) => action(TypesCarrinho.NEW_ITEM, payload)
export const addItem = (payload: number) => action(TypesCarrinho.ADD_ITEM, payload)
export const subItem = (payload: number) => action(TypesCarrinho.SUBTRACT_ITEM, payload)
export const deleteItem = (payload: number) => action(TypesCarrinho.DELETE_ITEM, payload)
export const clear = () => action(TypesCarrinho.CLEAR)