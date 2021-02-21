import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CarrinhoState , Item } from '../../store/ducks/Carrinho/types'
import { addItem , subItem , deleteItem , clear } from '../../store/ducks/Carrinho/actions'

const Carrinho = () => {
    
    const itens = useSelector((state: CarrinhoState) => state.carrinho.arrayItem)

    const total = useSelector((state: CarrinhoState) => state.carrinho.total)

    const dispatch = useDispatch()

    const finalizar = () => {
        dispatch(clear())
        alert('Seu pedido foi realizado')
    }

    return (
        <> 
            {itens != null && 
                itens.map((item: Item) => (
                <li key={item.id}>
                    {item.title}
                    <button onClick={() => dispatch(subItem(item.id))}>-</button>  
                        {item.quantidade}                        
                    <button onClick={() => dispatch(addItem(item.id))}>+</button>
                    Valor = {item.price}
                    <button onClick={()=> dispatch(deleteItem(item.id))}>Deletar</button>
                </li>
            ))} 

            <button onClick={finalizar}>Finalizar compra</button>
        </>
    )
}

export default Carrinho