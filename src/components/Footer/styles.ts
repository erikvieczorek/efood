import styled from 'styled-components'
import { breakpoints, colors } from '../../styles '

export const Container = styled.footer`
  text-align: center;
  height: 298px;
  margin-top: 120px;
  padding-top: 40px;
  background-color: ${colors.lightSalmon};

  p {
    width: 480px;
    margin: 0 auto;
    font-size: 10px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 90%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
  }
`

export const SocialMediaLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 88px;
  margin-top: 32px;
  margin: 32px auto 80px;
`

export const SocialMediaLink = styled.a`
  cursor: pointer;
`
