import Head from "next/head";
import Navbar from '../components/Navbar';
import '../styles/global.css';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
   useEffect(() => {
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
