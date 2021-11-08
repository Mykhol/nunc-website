import React from 'react';
import Splash from "../../components/Splash";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import About from '../../components/About'
import Clients from '../../components/Clients'
import Pricing from '../../components/Pricing'
import { Helmet } from 'react-helmet'
import Contact from '../../components/Contact'
import PopUp from '../../components/PopUp'
import Services from '../../components/Services'

export default function HomePage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>NUNC | Livestreaming</title>
      </Helmet>
      <Navigation />
      <Splash />
      <PopUp />
      <About />
      <Clients />
      {/*<Services />*/}
      {/*<Pricing />*/}
      <Contact />
      <Footer />
    </React.Fragment>
  )
}
