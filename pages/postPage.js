import React from 'react';
import Head from 'next/head';

import Logged from '../src/components/Logged';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";


function PostPage() {
 
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

  return (
    <MuiThemeProvider theme={MyTheme}>
    <div> 
      <Head>
      <title>Página de post</title>
      </Head>
      <Logged />
    </div>
    </MuiThemeProvider>
  )
}

export default PostPage;