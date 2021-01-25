import Head from 'next/head';
import Navbar from '../components/Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import '../public/custom.css';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
   useEffect(() => {
      const M = require('materialize-css');
      M.AutoInit();
   }, []);

   return (
      <>
         <Head>
            <title>Todo one</title>
            <link
               href="https://fonts.googleapis.com/icon?family=Material+Icons"
               rel="stylesheet"
            />
         </Head>
         <Navbar />
         <Component {...pageProps} />
      </>
   );
}

export default App;
