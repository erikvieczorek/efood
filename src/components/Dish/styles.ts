import styled from 'styled-components'
import { colors } from '../../styles '
import { Link } from 'react-router-dom'

export const Card = styled.div`
  height: 338px;
  padding: 8px;
  background-color: ${colors.salmon};
  color: ${colors.lightSalmon};
`

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const Image = styled.div`
  height: 168px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`
export const LinkCart = styled(Link)`
  display: block;
  text-align: center;
  padding: 4px;
  max-width: 100%;
  background-color: ${colors.lightSalmon};
  color: ${colors.salmon};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`
