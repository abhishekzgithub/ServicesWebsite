import Head from 'next/head'
import Navbar from '../src/sections/navbar';
import Footer from '../src/components/footer/footer'
import Slider from '../src/sections/slider';
import OurSolution from '../src/sections/oursolutions';
import Contactus from '../src/sections/contactus';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Terminix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Navbar/>
      <Slider/>
      <OurSolution/>
      <Contactus/>  
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}
