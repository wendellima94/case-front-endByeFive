import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

import { useForm } from '../hooks/hooks';
import { UrlContext } from '../contexts/context';

import { OutlinedInputStyled } from '../components/inputs/FormInput'
import styles from '../styles/components/inputsCss/Inputs.module.css';


function SignUp() {
  const [ifRegister, setIfRegister] = useState(false)
  const { form, onChange, resetForm } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = form;

  const baseUrl = React.useContext(UrlContext);

  const router = useRouter();
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }
  function handleRegister() {
   setIfRegister(true)   
  }

  const goToPrivateArea = (event) => {
    const body = { name, email, password }
    event.preventDefault();
    axios.post(`${baseUrl}/register`, body)
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        router.push('/registredPage')
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
          <form onSubmit={goToPrivateArea}>
            <OutlinedInputStyled 
              name='name'
              placeholder='Nome de usuário'
              onChange={handleInputChange}
              type='text'
              value={name}
              required
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