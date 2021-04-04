import React from 'react';

import styles from '../styles/components/Logged.module.css';
import buttonStyles from '../styles/components/Button.module.css';

import {HeaderPagePost} from '../components/Header';
import { LoggedInput } from './inputs/FormInput';

function Logged() {

  return (
    <div>
      <HeaderPagePost />
      <main className={styles.mainContainer}>
        <form>
          <h1>lorem ipsum</h1>
          <LoggedInput
            label="Digite aqui seu texto"
            multiline
            rows={4}
            id="outlined-basic" 
            variant="outlined"
          />
          <button className={buttonStyles.buttonStyle}>
            Postar
          </button>
        </form>
      </main>
    </div>
  )
  }

export default Logged;