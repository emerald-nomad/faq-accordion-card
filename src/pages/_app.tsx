import '../styles/globals.scss'
import Head from "next/head";

function MyApp({ Component, pageProps }) {

 return  <>
    <Head>
      <title>FAQ Accordion Card</title>
    </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
