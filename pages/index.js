import Head from 'next/head'

import { UrlContext } from '../src/contexts/context';

import Login from '../src/components/Login'
import SignUp from '../src/components/SignUp'

import styles from '../src/styles/pages/HomePage.module.css';
import Header from '../src/components/Header';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

 export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f2f3f5',
    },
    secondary: {
      main: '#666666',
    },
    tertiary: {
      main: '#4cd62b'
    }
  },
});

export default function Home() {
  return (
    <UrlContext.Provider value={'http://localhost:4000/user'}>
    <MuiThemeProvider theme={theme}>
      <Header />  
      <div className={styles.container}>
        <Head>
          <title>Sistema de cadastro</title>
        </Head>
        <div className={styles.homeContainer}>
         
          <section>
            <SignUp />
          </section> 
        </div>  
      </div>
      </MuiThemeProvider>
    </UrlContext.Provider>
  )
}
