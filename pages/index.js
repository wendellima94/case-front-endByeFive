import Head from 'next/head'

import { UrlContext } from '../src/contexts/context';

import SignUp from '../src/components/SignUp'
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import styles from '../src/styles/pages/HomePage.module.css';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import ImageHomePage from '../src/components/ImageHomePage';

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
