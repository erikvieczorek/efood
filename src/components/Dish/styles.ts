import styled from 'styled-components'
import { colors } from '../../styles '

export const Card = styled.div`
  width: 338px;
  height: 320px;
  background-color: ${colors.salmon};
  color: ${colors.white};
`

export const Image = styled.div`
  height: 168px;
  margin: 8px;
  background-size: cover;
  background-position: center;
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 0 8px;
`
export const Description = styled.p`
  margin: 8px;
  font-size: 14px;
  line-height: 22px;
`
export const LinkCart = styled.a`
  background-color: ${colors.white};
  color: ${colors.salmon};
  display: block;
  max-width: 100%;
  text-align: center;
  margin: 0 8px 8px;
  font-weight: 700;
  font-size: 14px;
  padding: 4px;
  cursor: pointer;
`
