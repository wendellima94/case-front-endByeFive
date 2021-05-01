import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

import { useForm } from '../../hooks/hooks';
import { UrlContext } from '../../contexts/context';

import { OutlinedInputStyled } from '../inputs/FormInput'
import styles from '../../styles/components/inputsCss/Inputs.module.css';


function SignUp() {
  const [ifRegister, setIfRegister] = useState(false)
  const { form, onChange, resetForm } = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, username, password, confirmPassword } = form;

  const baseUrl = React.useContext(UrlContext);

  const router = useRouter();
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }
  function handleRegister() {
   setIfRegister(true)   
  }

  const handleSubmit = (event) => {
    const body = { name, email, username, password, confirmPassword }
    event.preventDefault();
    axios.post(`${baseUrl}/user`, body)
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        router.push('/PostPage')
        resetForm();
        window.alert('Cadastro efetuado com sucesso!')

      })
      .catch(err => {
        console.error(err);
        window.alert(err)
      })
  }

  return (
    
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        {ifRegister ? (
          <form onSubmit={handleSubmit}>
            <OutlinedInputStyled 
              name='name'
              placeholder='Nome completo'
              onChange={handleInputChange}
              type='text'
              value={name}
              required
              color='secondary'
            />
            <OutlinedInputStyled 
              name='username'
              placeholder='Nome de usuário'
              onChange={handleInputChange}
              type='text'
              required
              value={username}
              color='secondary'
            />
            <OutlinedInputStyled 
              name='email'
              placeholder='Email'
              onChange={handleInputChange}
              type='email'
              required
              value={email}
              color='secondary'
            />
            <OutlinedInputStyled 
              name='password'
              type='password' 
              placeholder='Senha'
              value={password}
              onChange={handleInputChange}
              type='password' 
              required
            />
            <OutlinedInputStyled 
              name='confirmPassword'
              type='password' 
              placeholder='Confirmar senha'
              value={confirmPassword}
              onChange={handleInputChange}
              type='password' 
              required
            />
            <button type='submit'>Cadastre-se</button>
          </form>
        ) : (
          <form>
            <h1>Seja bem vindo!</h1><br/>
            Ainda não possui cadastro?
          <button onClick={handleRegister} type='submit'>Clique aqui </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default SignUp;