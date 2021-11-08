import styled from 'styled-components'
import second from '../resources/second.png'

const PricingContainer = styled.div`

  width: 100%;
  
  background: white;

`

const PricingContentContainer = styled.div`

  width: calc(100% - (6 * ${props => props.theme.padding.lr}));

  padding: 100px calc(3 * ${props => props.theme.padding.lr});

  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colours.darkPrimary};
  
  > h2 {
    font-size: 50px;
    text-align: left;

    @media (max-width: 500px) {
      font-size: 35px;
    }
  }

`

export default function Pricing () {
  return (
    <PricingContainer>
    <PricingContentContainer>
      <h2>Our pricing</h2>
    </PricingContentContainer>
    </PricingContainer>
  );
};