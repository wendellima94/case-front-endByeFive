import React from 'react';

import style from '../styles/components/Header.module.css';

import Login from './Login';


function Header() {
  return (
    <div className={style.container}>
    <Login />
    </div>
  )
}

export default Header;