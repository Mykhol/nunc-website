import React from 'react'
import pic from '../resources/testpng.png'
import styled from 'styled-components'
import theme from './Theme'

const SectionContainer = styled.div`
  width: calc(100% - (6 * ${props => props.theme.padding.lr}));

  padding: 100px calc(3 * ${props => props.theme.padding.lr});

  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colours.lightPrimary};
  background: url(${pic}) right;
  background-size: cover;
  background-repeat: no-repeat;


  position: relative;

  line-height: 1.5;

  z-index: -5;
  

  p {
    width: 60%;
    font-weight: normal;
    z-index: 100;
    font-size: 17px;
  }

  @media (max-width: 500px) {
    > p {
      width: 100%;
    }
  }
  
  > img {
    position: relative;
    right: 0;
    top: 0;
    width: 60%;
  }

`

const SectionTitle = styled.h2`
  font-size: 50px;

  padding: 0px 0 30px 0 ;
  
  @media (max-width: 500px) {
    font-size: 35px;
  }

`

const SVGBackground = styled.svg`

  position: absolute;
  top: ${props => props.offset ? 'calc(100% - 2px)' : 'calc(100% - 4px)'};
  z-index: ${props => props.offset ? '100' : '200'};
  width: calc(100% + 20px);
  left: -10px;
  right: -10px;
  margin: 0;
  padding: 0;

`

export default function About () {
  return (
    <React.Fragment>
      <SectionContainer id={'about'}>
        <SectionTitle>Who are we?</SectionTitle>
        <p>
          NUNC is a bespoke live stream provider based in Auckland, New Zealand.
          We work with clients to produce high quality coverage of their
          projects at a cost that opens access to broadcast quality live video
          for online mediums.
          <br />
          <br />
          We work closely with our clients to create live productions that suit
          the nuances of each project. Our flexible services mean that no task
          is too difficult, and each production produces a unique product for
          viewing.
          <br />
          <br />
          We service a wide array of projects including weddings, AGM's, awards
          evenings, product launches, conferences and scripted online
          productions.
        </p>
  {/*      <SVGBackground xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">*/}
  {/*        <path fill={'black'} fill-opacity="1"*/}
  {/*d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,176C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>*/}
  {/*      </SVGBackground>*/}
  {/*      <SVGBackground offset={true} xmlns="http://www.w3.org/2000/svg"*/}
  {/*                     viewBox="0 0 1440 320">*/}
  {/*        <path fill={theme.colours.secondary} fill-opacity="1"*/}
  {/*d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,176C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>*/}
  {/*      </SVGBackground>*/}
      </SectionContainer>
    
    
    </React.Fragment>
  )
};