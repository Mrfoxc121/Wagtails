import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'



export default function Home() {
  return (
    <div className='max-w-[1400px] mx-[50px]'>
      <Head>
        <title>WagTails App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* navbar */}
     
      <Navbar/>
      <Hero/>
      <Services/>
      <Footer/>



     
    </div>
  )
}
