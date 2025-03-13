import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const [signState, setSignState] = useState("Entrar")
  return (
    <div className='login'>
      <img src={logo} alt='' className='login_logo' />
      <div className="login_form">
        <h1>{signState}</h1>
        <form>
          {signState==="Cadastre-se"?<input type='text' placeholder='Nome'/>:<></>}
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Senha'/>
          <button>{signState}</button>
          <div className="form_help">
            <div className="remember">
              <input type='checkbox' />
              <label htmlFor=''>Lembrar senha</label>
            </div>
            <p>Precisa de Ajuda?</p>
          </div>
        </form>
        <div className="form_switch">
          {signState==="Entrar"?<p>Novo no Lucario+? <span onClick={()=>{setSignState("Cadastre-se")}}>Cadastre-se agora!</span></p>:<p>Já tem conta? <span onClick={()=>{setSignState("Entrar")}}>Entre</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
