import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

import { useForm } from '../hooks/hooks';
import { UrlContext } from '../contexts/context';

import styles from '../styles/components/inputsCss/Inputs.module.css';

function Login() {
  const { form, onChange, resetForm } = useForm({
    email: '',
    password: ''
  });

  const baseUrl = React.useContext(UrlContext);

  const { email, password } = form;
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const router = useRouter();

  const goToPrivateArea = (event) => {
    event.preventDefault();
    const body = { email, password }
    axios.post(`${baseUrl}/login`, body)
    .then(respose => {
      window.localStorage.setItem('token', respose.data.token);
      router.push('/testPage')
      resetForm();
    }). catch (error => {
      console.log(error);
      window.alert(error)
    })
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>

        <form onSubmit={goToPrivateArea}>
          <input
            name='email'
            placeholder='Email'
            onChange={handleInputChange}
            type='email'
            required
            value={email}
          />
          <input
            name='password'
            type='password' 
            placeholder='Senha'
            value={password}
            onChange={handleInputChange}
            type='password' 
            required
          />
          <button type='submit'>Entrar</button>
          
        </form>
      </div>
    </div>
  )
}

export default Login;