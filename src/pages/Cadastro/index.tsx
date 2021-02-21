import React, { useState , useRef } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Cadastro = () => {

    const [logado, setLogado] = useState<boolean>(false)
    const [erroLogin, setErroLogin] = useState<boolean>(false)

    const inputName = useRef<HTMLInputElement>(null)
    const inputEmail = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)
    const inputAge = useRef<HTMLInputElement>(null)

    const Logar = () => {
        const requisicao = {
            name: inputName.current?.value,
            email: inputEmail.current?.value,
            password: inputPassword.current?.value,
            age: Number(inputAge.current?.value)
        }

        if (requisicao.age >= 18) {
            axios.post('http://localhost:4000/register', requisicao)
                .then(resposta => {
                    localStorage.setItem("token", resposta.data.accessToken)
                    setLogado(true)
                })
        }else{
            setErroLogin(true)
        }
    }

    return (
        <>
            <input type='text' placeholder='Nome' ref={inputName} />
            <input type='text' placeholder='Email' ref={inputEmail} />
            <input type='text' placeholder='Senha' ref={inputPassword} />
            <input type='text' placeholder='Idade' ref={inputAge} />
            <button onClick={Logar}>Logar</button>
            {logado ? <Redirect to="/home" /> : erroLogin ? <p>Não foi possível logar (acesso permitido apenas para maiores de 18 anos)</p> : <p>Insira seus dados</p>}
        </>
    )
}

export default Cadastro