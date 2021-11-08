import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useHistory } from 'react-router'
import styled, { keyframes } from 'styled-components'
import { Instagram, Vimeo, Facebook }from '@styled-icons/boxicons-logos'

const FooterContainer = styled.div`
  // font-family: ${props => props.theme.fonts.primary};
  // width: 100%;
  // height: 400px;
  // background: ${props => props.theme.colours.darkPrimary};
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-end;
`



const Copyright = styled.div`
  align-self: flex-end;
  min-height: 50px;
  width: 100%;
  background: ${props => props.theme.colours.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 500px) {
    flex-direction: column;
    
    > p {
      text-align: center;
      margin: 20px 0;
      line-height: 1.4;
    }
  }

  > p {
    padding: 0 60px;
    font-size: 15px;
    font-weight: 400;
    color: ${props => props.theme.colours.lightPrimary};

    > span {
      padding: 5% 0;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: bolder;
      background-image: linear-gradient(${props => props.theme.colours.lightPrimary},${props => props.theme.colours.lightPrimary});
      background-size: 0 2px;
      background-position: 0 75%;
      background-repeat: no-repeat;
      
      // animation: ${props => pulse(props.theme)} 1.5s ease;
      // animation-iteration-count: infinite;

      &:hover {
        // color: ${props => props.theme.colours.secondary};
        // color: blue;
        background-size: 100% 2px;
        
        
      }
    }

  }
`

const pulse = (theme) => keyframes`
  
  0% {
    color: ${theme.colours.secondary}
  }
  
  50% {
    color: ${theme.colours.darkPrimary}
  }
  
  100% {
    color: ${theme.colours.secondary}
  }
`


const FooterContentContainer = styled.div`
  width: calc(100% - (3 * ${props => props.theme.padding.lr}));
  padding: 30px calc(3*${props => props.theme.padding.lr});
  align-self: flex-start;
  
  height: 300px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  color: ${props => props.theme.colours.lightPrimary};
  
  > div {
    
    > h2 {
      font-weight: 700;
      padding-bottom: 10px;
      background-image: linear-gradient(${props => props.theme.colours.secondary}, ${props => props.theme.colours.secondary});
      background-size: 100% 2px;
      background-position: 0 100%;
      background-repeat: no-repeat;
      margin-bottom: 40px;
    }
    
    > p {
      margin: 5px 0;
      padding: 0;
      font-weight: 200;
      > span {
        font-weight: 700;
      }
      
    }
    
  }
  
`

const Socials = styled.div`

  min-height: 50px;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  background: ${props => props.theme.colours.lightPrimary};
  
  > * {
    width: 30px;
    margin: 0 20px;
    color: ${props => props.theme.colours.darkPrimary};
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      opacity: 0.7;
      color: ${props => props.theme.colours.secondary};
    }
    
  }
  

`



export default function Footer () {
  
  // Opens a random url from a list in a new tab.
  const madeWithLove = () => {
    
    const links = [
      'https://www.redcross.org.nz/donate/where-the-need-greatest/',
      'https://www.aucklandyouthvoice.co.nz/donate',
      'https://www.spca.nz/donate/donate-now',
      "https://my.worldvision.org.nz/donate#oneoff",
      "https://www.stjohn.org.nz/support-us/donate/annual-appeal-2021/",
    ]
    
    const rand = Math.floor(Math.random() * links.length)
    
    window.open(
      links[rand],
      '_blank', // <- This is what makes it open in a new window.
    )
  }
  
  let link = "";
  
  const handleRedirect = (location) => {
    switch (location) {
      case "vimeo":
        link = "https://vimeo.com/nuncnz/"
        break;
        
      case "facebook":
        link = "https://facebook.com/nuncnz"
        break;
        
      case "instagram":
        link = "https://instagram.com/nuncnz"
        break
      
      default:
        link = "http://nunc.co.nz/"
        break
    }
    
    console.log("Click")
    window.open(link, '_blank')
    
  }
  
  return (
    <FooterContainer id='footer'>
      
      {/*<FooterContentContainer>*/}
      {/*  <div>*/}
      {/*    <h2>Get in touch.</h2>*/}
      {/*    <p><span>Email: </span>info@nunc.co.nz</p>*/}
      {/*    <p><span>Phone: </span>+64 021 163 3862</p>*/}
      {/*  </div>*/}
      {/*</FooterContentContainer>*/}
      
      <Socials>
        <Vimeo onClick={() => handleRedirect("vimeo")}/>
        <Facebook onClick={() => handleRedirect("facebook")}/>
        <Instagram onClick={() => handleRedirect("instagram")}/>
      </Socials>
      
      <Copyright>
        <p>&copy; 2020 - {(new Date().getFullYear())} NUNC Consulting Limited. All
          Rights Reserved.</p>
        <p>Website made with <span
          onClick={() => madeWithLove()}>love</span>, right here at NUNC.</p>
      </Copyright>
    </FooterContainer>
  )
}