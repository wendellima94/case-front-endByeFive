import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

import { useForm } from '../hooks/hooks';
import { UrlContext } from '../contexts/context';

import styles from '../styles/components/Login.module.css';

//Imports do Material-Ui
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { OutlinedInputStyled } from '../components/inputs/FormInput'


function Login() {
  // useFeedPage();

  const { form, onChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [values, setValues] = React.useState({
    showPassword: false,
  });
  
  const baseUrl = React.useContext(UrlContext);

  const { email, password } = form;
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const router = useRouter();

  const goToRegistredPage = (event) => {
    event.preventDefault();
    const body = { email, password }
    axios.post(`${baseUrl}/login`, body)
    .then(response => {
      window.localStorage.setItem('token', response.data.token);
      window.localStorage.setItem('username',  response.data.user.name)
      router.push('/postPage')
      resetForm();
    }). catch (error => {
      console.log(error);
      window.alert(error)
    })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <form onSubmit={goToRegistredPage}>
          <OutlinedInputStyled
            color='secondary'
            name='email'
            placeholder='Email'
            onChange={handleInputChange}
            type='email'
            required
            value={email}
            endAdornment={
              <AccountCircle
                edge='end'
              >
              </AccountCircle>
            }
          />
          <OutlinedInputStyled
            color='primary'
            id="outlined-adornment-password"
            placeholder='Senha'
            name='password'
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleInputChange}
            endAdornment={
              <IconButton
                className={styles.iconButton}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
          />
          <button 
          className={styles.signButton}
          type='submit'
          >
            Entrar
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default Login;