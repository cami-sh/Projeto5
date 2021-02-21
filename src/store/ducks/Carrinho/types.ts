export enum TypesCarrinho {
    NEW_ITEM = 'NEW_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
    ADD_ITEM = 'ADD_ITEM',
    SUBTRACT_ITEM = 'SUBTRACT_ITEM',
    CLEAR = 'CLEAR'
}

export interface Item {
    id: number,
    title: string,
    price: string,
    image: string,
    quantidade: number
}

export interface Carrinho {
    arrayItem: Item[],
    total: number
}

export interface CarrinhoState {
    carrinho: Carrinho
}