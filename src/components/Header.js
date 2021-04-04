import React from 'react';
import { useRouter } from 'next/router';

import style from '../styles/components/Header.module.css';

import Login from './Login';


export function Header() {
  return (
    <div className={style.container}>
    <Login />
    </div>
  )
}

export function HeaderPagePost() {
  
  const [user, setUser] = React.useState(null);

  const router = useRouter();

  React.useEffect(() =>{
    setUser(window.localStorage.getItem('username'))
    
  }, [])

  
  const logOut = () => {
    window.localStorage.clear();
    router.push('/');
  }
  return (
    <div className={style.headerPostContainer}>
      <span>Olá 
            <span> {user}</span>
            , seja bem vindo!</span>
        <div>
          <p><img onClick={logOut} src='icons/logout.png' alt='Logout'/></p>
        </div>
    </div>
  )
}


