import React from 'react';
import { useRouter } from 'next/router';

import styles from '../src/styles/pages/RegisteredPage.module.css'

function registredPage() {
  const router = useRouter();

  function backToHomePage() {
    router.push('/');
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={backToHomePage}>Voltar para o Inicio</button>
      </div>
      <div className={styles.elementsContainer}>
        <p>Parabéns você está logado com sucesso!</p>
        <img src='icons/champanhe.svg' alt='Imagem Champanhe' />
      </div>
    </div>

  );
}

export default registredPage;