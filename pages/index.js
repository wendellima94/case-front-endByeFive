import Head from 'next/head'
import React from 'react'
import { UrlContext } from '../src/contexts/context';

import SignUp from '../src/components/Register/SignUp'
import { Header } from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

import styles from '../src/styles/pages/HomePage.module.css';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import ImageHomePage from '../src/components/ImageHomePage';

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#2aa9e0",
    },
    secondary: {
      main: "#fff",
    },
  },
});

export default function Home() {

  return (
    <UrlContext.Provider value={'http://localhost:4000'}>
    <MuiThemeProvider theme={MyTheme}>
      <Head>
      <title>Página de Cadastro</title>
      </Head>
      <Header /> 
      <div className={styles.container}>
        <div className={styles.homeContainer}>
          <section>
            <ImageHomePage />
          </section>         
          <section>
            <SignUp />
          </section> 
        </div>
      </div>
      <Footer />
    </MuiThemeProvider>
    </UrlContext.Provider>
  )
}
