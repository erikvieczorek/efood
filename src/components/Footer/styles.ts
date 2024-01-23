import styled from 'styled-components'
import { colors } from '../../styles '

export const Container = styled.footer`
  text-align: center;
  height: 298px;
  background-color: ${colors.lightSalmon};
  padding-top: 40px;
  margin-top: 120px;

  p {
    font-size: 10px;
    width: 480px;
    margin: 0 auto;
  }
`

export const SocialMediaLinks = styled.ul`
  margin-top: 32px;
  width: 88px;
  display: flex;
  margin: 32px auto 80px;
  justify-content: space-evenly;
`

export const SocialMediaLink = styled.a`
  cursor: pointer;
`
