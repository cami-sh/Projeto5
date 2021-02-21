import React from 'react'
import { useSelector } from 'react-redux'
import { CarrinhoState } from '../../store/ducks/Carrinho/types'

const Header = () => {

    const total = useSelector((state: CarrinhoState) => state.carrinho.total)

    return (
        <p>Itens no carrinho: {total}</p>
    )
}

export default Header