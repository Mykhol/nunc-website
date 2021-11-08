import styled from 'styled-components'
import second from '../resources/second.png'

const ServicesContainer = styled.div`

  width: 100%;

  background: url(${second}) center no-repeat;
  background-size: cover;
  
`

const ServicesContentContainer = styled.div`

  width: calc(100% - (6 * ${props => props.theme.padding.lr}));

  padding: 100px calc(3 * ${props => props.theme.padding.lr});

  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colours.lightPrimary};
  
  > h2 {
    font-size: 50px;
    text-align: center;
    

    @media (max-width: 500px) {
      font-size: 35px;
    }
  }

`

export default function Services() {
  
  return (
    <ServicesContainer>
      <ServicesContentContainer>
        <h2>What we offer</h2>
      </ServicesContentContainer>
    </ServicesContainer>
  )
  
}