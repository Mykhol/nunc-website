import React from 'react'
import styled from 'styled-components'

import pyf from '../resources/logos/pyf.png'
import hyc from '../resources/logos/hyc.png'
import slipstream from '../resources/logos/slipstream.png'
import lc from '../resources/logos/lc.png'
import sky from '../resources/logos/sky.png'
import sbc from '../resources/logos/sbc.png'
import ausa from '../resources/logos/ausa.png'
import mam from '../resources/logos/mam.png'
import mam2 from '../resources/logos/mam2.png'
import al from '../resources/logos/al.png'
import encore from '../resources/logos/encore.png'
import awf from '../resources/logos/awf.png'
import pion from '../resources/logos/Logo-01 (1).png'

import theme from './Theme'

const ClientContainer = styled.div`
  width: 100%;

  padding: 100px 0 100px 0;

  position: relative;

  background: ${props => props.theme.colours.lightPrimary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  


`

const ClientLogoContainer = styled.div`
  
  width: calc(100% - 10 * ${props => props.theme.padding.lr});
  
  @media (max-width: 500px) {
    width: calc(100% - 6 * ${props => props.theme.padding.lr});
  }
  

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

`

const ClientHeader = styled.h2`

  font-family: ${props => props.theme.fonts.primary};
  font-size: 50px;

  color: ${props => props.theme.colours.darkPrimary};
  
  z-index: 3;
  text-align: center;
  
  padding-bottom: 50px;
  
  @media (max-width: 500px) {
    font-size: 35px;
    padding: 0 20px 10px 20px;
  }

`

const Client = styled.div`
  width: calc((100% / 3) - 10%);
  margin: 25px 5%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 500px) {
    width: calc((100%/2) - 10%);
  }

`

const ClientLogo = styled.img`
  max-height: 100%;
  max-width: 100%;
  display: flex;
  opacity: 0.9;
  transition: all 0.3s ease;

  cursor: pointer;
  z-index: 0;


  &:hover {
    opacity: 1;
    transform: scale(1.06);
    z-index: 10;
  }

`

const SVGBackground = styled.svg`

  position: absolute;
  top: ${props => props.offset ? '-2px' : '-4px'};
  z-index: ${props => props.offset ? '1' : '2'};
  width: calc(100% + 20px);
  left: -10px;
  right: -10px;
  margin: 0;
  padding: 0;

`

export default function Clients () {
  
  return (
    <ClientContainer>
      <ClientHeader>Who we've worked with</ClientHeader>
      <ClientLogoContainer>
        <Client>
          <ClientLogo src={pyf} alt={"Puketāpapa Youth Foundation Logo"}/>
        </Client>
        <Client>
          <ClientLogo src={slipstream} alt={"Slipstream Media Logo"}/>
        </Client>
        <Client>
          <ClientLogo src={lc} alt={"Lynfield College Logo"}/>
        </Client>
        <Client>
          <ClientLogo src={sky} alt={"Sky Next Logo"}/>
        </Client>
        <Client>
          <ClientLogo src={sbc} alt={"Sustainable Business Council Logo"}/>
        </Client>
        <Client>
          <ClientLogo src={ausa} alt={"Auckland University Students Association Logo"}/>
        </Client>
        {/*<Client>*/}
        {/*  <ClientLogo src={mam} alt={"Make All Media Logo"}/>*/}
        {/*</Client>*/}
        <Client>
          <ClientLogo src={hyc} alt={"Howick Youth Council Logo"}/>
        </Client>
        <Client>
          <ClientLogo src={mam2} alt={"Make All Media Logo"}/>
        </Client>
        <Client>
          <ClientLogo src={al} alt={"Auckland Live Logo"}/>
        </Client>
        <Client>
          <ClientLogo src={encore} alt={"Encore AV Logo"}/>
        </Client>
        <Client>
          <ClientLogo src={awf} alt={"Auckland Writers Festival Logo"}/>
        </Client>
        <Client>
          <ClientLogo src={pion} alt={"Pioneer Ministry Logo"}/>
        </Client>
      </ClientLogoContainer>
      {/*<SVGBackground xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">*/}
      {/*  <path fill={theme.colours.darkPrimary} fill-opacity="1"*/}
      {/*        d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,176C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>*/}
      {/*</SVGBackground>*/}
      {/*<SVGBackground offset={true} xmlns="http://www.w3.org/2000/svg"*/}
      {/*               viewBox="0 0 1440 320">*/}
      {/*  <path fill={theme.colours.secondary} fill-opacity="1"*/}
      {/*        d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,176C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>*/}
      {/*</SVGBackground>*/}
    
    </ClientContainer>
  )
}