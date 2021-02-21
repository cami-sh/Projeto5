import { TypesCarrinho , Carrinho , Item } from './types'

const initialStateCarrinho: Carrinho = {
    arrayItem: [],
    total: 0
}

function reducerCarrinho(state = initialStateCarrinho, action: any){
    const itens: Item[] = state.arrayItem
    switch(action.type) {
        case TypesCarrinho.NEW_ITEM:
            let novo: boolean = true
            itens.map((item: Item) => {
                if(item.id === action.payload.id){
                    item.quantidade ++
                    novo = false
                }
            })
            if (novo) {itens.push(action.payload)}
            return {
                arrayItem: itens,
                total: state.total+1
            }
        case TypesCarrinho.ADD_ITEM:
            itens.map((item: Item) => {
                if(item.id === action.payload){
                    item.quantidade ++
                }
            })
            return {
                arrayItem: itens,
                total: state.total+1
            }
        case TypesCarrinho.SUBTRACT_ITEM:
            itens.map((item: Item) => {
                if(item.id === action.payload){
                    if(item.quantidade > 1){
                        item.quantidade --
                        state.total --
                    }
                }
            })
            return {
                arrayItem: itens,
                total: state.total
            }
        case TypesCarrinho.DELETE_ITEM:
            let index = 0
            itens.map((item:Item) => {
                if(item.id === action.payload){
                    index = itens.indexOf(item)
                    state.total = state.total - item.quantidade
                }
            })
            itens.splice(index, 1)
            return {
                arrayItem: itens,
                total: state.total
            }
        case TypesCarrinho.CLEAR:
            return{
                arrayItem: [],
                total: 0
            }
        default:
            return state
    }
}

export default reducerCarrinho