import Head from 'next/head'

import { UrlContext } from '../src/contexts/context';

import Login from '../src/components/Login'
import SignUp from '../src/components/SignUp'

import styles from '../src/styles/pages/HomePage.module.css';

export default function Home() {
  return (
    <UrlContext.Provider value={'http://localhost:4000/user'}>
      <div className={styles.container}>
        <Head>
          <title>Sistema de cadastro</title>
        </Head>
        <div className={styles.homeContainer}>
          <section>
            <Login />
          </section>
          <section>
            <SignUp />
          </section> 
        </div>  
      </div>
    </UrlContext.Provider>
  )
}
