import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import theme from './Theme'
import logo from '../resources/LOGO.png'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const NavigationContainer = styled.div`
  width: 100%;

  background: ${props => props.bg ? props.theme.colours.darkPrimary : null};
  height: ${props => props.bg ? '80px' : '125px'};
  
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.4s ease;
`

const Logo = styled.img`
  padding: 10px;
  margin-left: 60px;
  height: 50%;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  background-image: linear-gradient(to bottom, rgb(${theme.coloursRgb.secondary}), rgb(${theme.coloursRgb.secondary}));
  background-size: 0 0;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  
  &:hover {
    opacity: 0.8;
  }
  
`

const NavList = styled.ul`
  position: absolute;
  right: 0px;
  width: 75%;
  display: flex;
  flex-direction: row-reverse;
  list-style: none;
  align-items: center;
  align-content: center;
  

  > li {
    
    overflow: visible;
    
    margin-right: 60px;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 15px;
    text-transform: uppercase;
    color: ${props => props.theme.colours.lightPrimary};

    > a {
      font-weight: bold;
      padding: 10px;
      background-image: linear-gradient(to bottom, rgb(${theme.coloursRgb.secondary}), rgb(${theme.coloursRgb.secondary}));
      background-size: calc(100% - 20px) 3px;
      background-position: 50% calc(100% - 5px);
      background-repeat: no-repeat;

      cursor: pointer;

      transition: all 0.2s ease;

      &:hover {
        background-position: 0 100%;
        background-size: 100% 100%;
      }

      &:active {
        background-image: linear-gradient(to bottom, rgba(${theme.coloursRgb.secondary}, 0.8), rgba(${theme.coloursRgb.secondary}, 0.8));
      }
    }

`

export default function Navigation (props) {
  
  let bgCheck = props.bg;
  
  const history = useHistory()
  
  const [scrollPosition, setScrollPosition] = useState(0)
  const [windowDimensions, setWindowDimensions] = useState({})
  
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height, scrollY: scroll} = window
    return {
      width,
      height,
      scroll,
    }
  }
  
  
  const handleResize = () => {
    setWindowDimensions(getWindowDimensions())
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowDimensions])
  
  
  useEffect(() => {
    const onScroll = e => {
      setScrollPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);
  
  return (
    <NavigationContainer bg={bgCheck ? true : scrollPosition > 125}>
      <Logo src={logo} alt={'NUNC Logo'} onClick={() => {
        history.push('/')
        
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        
      }}/>
      <NavList>
        {/*<li><a*/}
        {/*  onClick={() => history.push('/us')}>*/}
        {/*  What we do*/}
        {/*</a></li>*/}
        {/*<li><a*/}
        {/*  onClick={() => history.push('/our-work')}>*/}
        {/*  Our Work*/}
        {/*</a></li>*/}
        <li><a
          onClick={() => {
    
            let el = document.querySelector('#contact')
            let offset = 80; // sticky nav height
            window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' });
    
          }}>
          Contact
        </a></li>
      </NavList>
    </NavigationContainer>
  )
}