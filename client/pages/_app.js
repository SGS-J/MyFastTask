import Head from 'next/head';
import Navbar from '../components/Navbar';
import 'materialize-css/dist/css/materialize.min.css';

function App({ Component, pageProps }) {
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
