import axios from 'axios';
import React , { useEffect, useState } from 'react';
import { Redirect , Link } from 'react-router-dom';
import { beerItem } from './types'
import { newItem } from '../../store/ducks/Carrinho/actions'
import { useDispatch } from 'react-redux';
import { Item } from '../../store/ducks/Carrinho/types';

const Home = () => {

    const token = localStorage.getItem("token")

    const [categories, setCategories] = useState<string[]>([])
    const [beers, setBeers] = useState<beerItem[]>([])

    useEffect(() => {
        if(token !== null) {
            const headers = {
                'Authorization': `Bearer ${token}`
            }     
            axios.get('http://localhost:4000/categories', { headers: headers })
                .then(resposta => setCategories(resposta.data))
            axios.get('http://localhost:4000/beers', { headers: headers })
                .then(resposta => setBeers(resposta.data))
        }
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