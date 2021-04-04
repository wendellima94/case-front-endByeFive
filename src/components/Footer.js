import React from 'react';
import style from '../styles/components/Footer.module.css';

function Footer() {
  return (
    <div className={style.container}>
      <p>Criado e desenvolvido por Wendel de Lima</p>
      <div>
        {`© 2021 - ${(new Date()).getFullYear()}, Todos os direitos reservados`}
      </div>
    </div>
  )
}

export default Footer;