import Head from 'next/head'
//import Header from '../src/sections/header';
import Navbar from '../src/sections/navbar';

import Footer from '../src/components/footer/footer'

import Section1 from '../src/sections/section1';
import Slider from '../src/sections/slider';
// import Section3 from '../src/sections/section3';
// import Section4 from '../src/sections/section4';
// import Section5 from '../src/sections/section5';
// import Section6 from '../src/sections/section6';
// import BookingForm from '../src/sections/booking-form';
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
      {/* <Section1/> */}
        {/* <Header/>
        
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <BookingForm/>
        <OurSolution/>
        <Section6/>
        <Contactus/> */}


        
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}
