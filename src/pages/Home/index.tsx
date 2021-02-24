import axios from 'axios';
import React , { useEffect, useState } from 'react';
import { Redirect , Link } from 'react-router-dom';
import { beerItem } from './types'
import { newItem } from '../../store/ducks/Carrinho/actions'
import { useDispatch } from 'react-redux';
import { Item } from '../../store/ducks/Carrinho/types';
import toast from 'react-hot-toast';

const Home = () => {

    const token = localStorage.getItem("token")

    const [categories, setCategories] = useState<string[]>([])
    const [beers, setBeers] = useState<beerItem[]>([])

    const Requisicao = async () => {
        try {
            if(token !== null) {
                const headers = {
                    'Authorization': `Bearer ${token}`
                }     
                const resposta_categories = await axios.get('http://localhost:4000/categories', { headers: headers })
                setCategories(resposta_categories.data)
    
                const resposta_beers = await axios.get('http://localhost:4000/beers', { headers: headers })
                setBeers(resposta_beers.data)
            }
        } catch (erro) {
            if (erro.response.status === 401) {
                toast.error('Acesso negado (token inválido)')
            }
            if (erro.response.status === 403) {
                toast.error('Acesso não autorizado')
            }
            if (erro.response.status === 404) {
                toast.error('Erro 404')
            }
        }
    
    }

    useEffect(() => {
        Requisicao()
    }, [])

    const dispatch = useDispatch()

    const AdicionarAoCarrinho = (item: beerItem) => {
        const novo: Item = {
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
            quantidade: 1
        } 
        dispatch(newItem(novo))
    }

    return (
        <>
            {token === null && <Redirect to='/'/>}

            {categories !== null &&
                categories.map((item: string) => (
                    <li key={categories.indexOf(item)}>
                        {item}
                    </li>
                ))
            }

            {beers !== null &&
                beers.map((item: beerItem) => (
                    <li key={item.id}>
                        {item.title}
                        {item.description}
                        <Link to='/carrinho'><button onClick={() => AdicionarAoCarrinho(item)}>Adicionar ao carrinho</button></Link>
                    </li>
                ))
            }
        </>
    )
}

export default Home