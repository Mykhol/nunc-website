import React, { useEffect } from 'react'
import styled from 'styled-components'
import Vimeo from '@u-wave/react-vimeo'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import { Helmet } from 'react-helmet'

const ContentWrapper = styled.div`

  padding-top: 150px;
  width: 100%;

  font-family: ${props => props.theme.fonts.primary};

  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  color: ${props => props.theme.colours.lightPrimary};


  display: flex;
  flex-direction: column;
  align-items: center;


  > div {
    width: 50%;

    > h2 {
      font-size: 30px;
      padding-bottom: 20px;

      background-image: linear-gradient(white, white);
      background-repeat: no-repeat;
      background-size: 50% 4px;
      background-position: 0 100%;

    }

    > p {
      font-weight: 300;
      padding: 50px 0;
      font-size: 18px;
    }

  }


  > ${Vimeo} {
  }

`

export default function FAEPage (props) {
  
  return (
    
    <React.Fragment>
      <Helmet>
        <title>Lynfield College FAE 2020</title>
      </Helmet>
      <Navigation bg={true}/>
      <ContentWrapper>
        <div>
          <h2>Lynfield College's 2020 Festival Award Evening</h2>
          <Vimeo width="100%" responsive video={470952671} />
          <p>"On Thursday 22nd October, we held our annual Lynfield College
            Senior Festival Awards celebrating student success in sports, the
            arts and cultural activities.
            <br />
            <br />
            While this year’s celebrations were different to previous years as
            it was held at school, it turned out to be a great night to look
            back on what our students were able to achieve in 2020. It was
            amazing to see families, staff and the community attend this event,
            as well as many others joining us through livestream."
            <br />
            <br />
            <i>- Lynfield College</i>
          </p>
        </div>
      </ContentWrapper>
      <Footer />
    </React.Fragment>
  
  )
}
