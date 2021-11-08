import styled from 'styled-components'
import * as entypo from '@styled-icons/entypo'
import React from 'react'

const PopUpWrapper = styled.div`

  width: 100%;
    // background-color: ${props => props.theme.colours.secondary};
  z-index: 1;
  color: black;

  display: flex;
  flex-direction: column;
  background: #ffffff;

`

const PopUpTopBar = styled.div`
  // General Styling (Desktop)
  background: repeating-linear-gradient(-45deg,
  transparent,
  transparent 30px,
  #ffc90a 30px,
  #ffc90a 60px);

  width: 100%;
  height: 30px;

  // Mobile Specific Styling
  @media (max-width: 400px) {

  }
`

const RightArrow = styled(entypo.ChevronRight)`
  color: inherit;
  height: 25px;
`

const PopUpContent = styled.div`

  width: calc(100% - 6 * ${props => props.theme.padding.lr});

  margin-left: calc(3 * ${props => props.theme.padding.lr});

  padding-bottom: 30px;

  border: 2px solid white;

  //background: #F7CD46;

  > h2 {

    font-size: 50px;

    padding: 30px 0 30px 0 ;

    @media (max-width: 500px) {
      font-size: 35px;
    }
    
  }

  > p {
    width: 60%;
    padding: 0 0 0 0;
    font-size: 17px;
  }
  
  @media (max-width: 500px) {
    > p {
      width: 100%;
    }
  }

  > button {
    font-size: 17px;
    margin-top: 25px;
    background: black;
    color: white;
    padding: 10px;
    border-radius: 15px;
    border: white 2px solid;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    transition: all 0.3s ease;

    &:hover {
      border: black 2px solid;
      background: white;
      color: black;
    }

  }

  transition: all 0.3s ease;

`

export default function PopUp () {
  
  return (
    <PopUpWrapper id={'covid'}>
      <PopUpTopBar />
      <PopUpContent>
        <h2>NUNC & COVID-19</h2>
        <p>One of the amazing parts of the support we offer, is being able to
          run live events completely remote during level 3 and 4 lockdown. Guest
          speakers can join your virtual event using any laptop or device they
          have, and viewers can use platforms they are already familiar with to
          watch your events.
          <br />
          <br />
          During level 3 we can also work within the
          guidelines to live stream small in person gatherings to a larger
          audience using the same technology.</p>
        <button onClick={() => {
  
          let el = document.querySelector('#contact')
          let offset = 80; // sticky nav height
          window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' });
  
        }}>Contact us <RightArrow /></button>
        
        
      </PopUpContent>
      <PopUpTopBar />
    </PopUpWrapper>
  )
  
}