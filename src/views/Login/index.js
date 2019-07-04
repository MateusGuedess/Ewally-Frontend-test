import React, { useState } from 'react';
import axios from "axios"
import { StyledContainer, StyledLogin, StyledForm } from './styles';
import { useDispatch } from 'react-redux'

export default function Login({ match, history }) {

    const dispatch = useDispatch()

    const [user, setUser] = useState("testFrontEwally")
    const [password, setPassword] = useState("123456")

    async function handleSubmit(e){
        e.preventDefault();

        const responseLogin = await axios.post( "https://apidev.ewally.com.br/user/login", {
                "username": user,
                "password": password
        })

        const responseBalance = await axios.get("https://apidev.ewally.com.br/account/balance",
            { headers: { "Authorization" : `Bearer ${responseLogin.data.token}`}}
        )

        dispatch({type: "LOGIN", token: responseLogin.data.token, balance: responseBalance.data.balance})

        history.push('/consult')
    }

    function handleUser(e) {
        setUser(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

  return (
    <StyledContainer>
        <StyledLogin>
            <StyledForm onSubmit={(e) => handleSubmit(e)}>
                <input type="text" onChange={(e) => handleUser(e)} placeholder="User"/>
                <input type="text" onChange={(e) => handlePassword(e)} placeholder="Password"/>
                <button>Enter</button>
            </StyledForm>
        </StyledLogin>
    </StyledContainer>
  );
}
