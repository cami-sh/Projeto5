import React, { useState , useRef } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import toast from 'react-hot-toast'

const Cadastro = () => {

    const [logado, setLogado] = useState<boolean>(false)
    const [erroLogin, setErroLogin] = useState<boolean>(false)

    const inputName = useRef<HTMLInputElement>(null)
    const inputEmail = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)
    const inputAge = useRef<HTMLInputElement>(null)

    const Logar = async () => {
        try {
            const requisicao = {
                name: inputName.current?.value,
                email: inputEmail.current?.value,
                password: inputPassword.current?.value,
                age: Number(inputAge.current?.value)
            }
    
            if (requisicao.age >= 18) {
                const resposta = await axios.post('http://localhost:4000/register', requisicao)
                localStorage.setItem("token", resposta.data.accessToken)
                setLogado(true)
                    
            }else{
                setErroLogin(true)
            }
        } catch (erro) {
            if (erro.response.status === 400) {
                toast.error('Senha muito curta! Mínimo de 4 caracteres')
            }
            if (erro.response.status === 403) {
                toast.error('Acesso não autorizado')
            }
            if (erro.response.status === 404) {
                toast.error('Erro 404')
            }
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