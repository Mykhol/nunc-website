import React, { useEffect, useState } from 'react'
import splashVideo
  from '../resources/yt1s.com - Demo Reel 2020  Filmmaker  Editor  Cinematographer  Ridder Films.mp4'
import splashPicture from '../resources/EXP-1.jpg'
import smoothscroll from 'smoothscroll-polyfill'
import styled, { keyframes } from 'styled-components'
import * as entypo from '@styled-icons/entypo'

const blink = keyframes`

  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`

const SplashContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: ${props => props.windowHeight}px;
  background-color: ${props => props.theme.colours.darkPrimary};
  overflow-x: hidden;
`

const SplashVideo = styled.video`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  height: 100%;
  min-width: 100%;
`

const SplashPicture = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  height: 100%;
  min-width: 100%;
`

const GoLive = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colours.lightPrimary};
  border: 2px solid ${props => props.theme.colours.secondary};
  border-radius: 25px;
  padding: 7px;
  transition: all 0.4s ease;
  
  @media (max-width: 500px) {
    font-size: 10px;
    
    > div {
      //min-height: 15px;
      //min-width: 15px;
    }
  }

  &:hover {
    background: ${props => props.theme.colours.secondary};
    bottom: 35px;

    > div {
      background: ${props => props.theme.colours.lightPrimary};
    }
  }

  &:active {
    opacity: 0.4;

    > div {
      opacity: 0.4;
    }
  }

  > * {
    margin: 10px;
  }
  
  
  > h2 {
    text-align: center;
    text-wrap: none;
  }

  > div {
    border-radius: 100%;
    min-height: 25px;
    min-width: 25px;
    animation: ${blink} 1.2s ease;
    animation-iteration-count: infinite;
    background: ${props => props.theme.colours.secondary};
  }
`

const DownArrow = styled(entypo.ChevronDown)`
  position: relative;
  width: 25px;
  color: ${props => props.theme.colours.lightPrimary};
`

const SplashHeading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  
  background: radial-gradient(rgba(${props => props.theme.coloursRgb.darkPrimary}, 0.5), rgba(${props => props.theme.coloursRgb.darkPrimary}, 0.1), transparent, transparent);
  border-radius: 100%;

  text-align: center;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colours.lightPrimary};
  
  > * {
    margin: 0;
  }
  
  > h2 {
    font-size: 5rem;
    font-weight: 700;
    
    span {
      font-weight: 400;
    }
    
    .bounce {
    
    }
    
  }
  
  
  
  > p {
    font-size: 35px;
    font-weight: normal;
    
  }
  
  @media (max-width: 400px) {
  
    > h2 {

      span {
        font-size: 3rem;
      }

      font-size: 4rem;
    }
    
    > p {
      font-size: 1.8rem;
    }
    
  }
  
`

export default function Splash () {
  
  smoothscroll.polyfill()
  
  const [windowDimensions, setWindowDimensions] = useState(0)
  
  useEffect(() => {
    setWindowDimensions(window.innerHeight)
  }, [])
  
  
  return (
    <SplashContainer windowHeight={windowDimensions}>
      {/*<SplashVideo src={splashVideo} muted controls={false} autoPlay loop />*/}
      <SplashPicture src={splashPicture}/>
      <SplashHeading>
        {/*<h2>We are <span>now</span>.</h2>*/}
        {/*<p>Taking you to the world.</p>*/}
        <h2><i><b>nunc</b><span>, adverb:</span></i></h2>
        <p><i>now, today, at present...</i></p>
      </SplashHeading>
      <GoLive
        onClick={() => {
          
          let el = document.querySelector('#covid')
          let offset = 80; // sticky nav height
          window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' });
          
        }}>
        <div />
        <h2>Go Live</h2>
        <DownArrow />
      </GoLive>
    </SplashContainer>
  )
}