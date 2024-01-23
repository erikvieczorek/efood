import styled from 'styled-components'
import { colors } from '../../styles '
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  width: 472px;

  ${TagContainer} {
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding-top: 8px;
  margin-bottom: 8px;
  font-size: 18px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
  background-size: cover;
  background-position: center;
`

export const Rate = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
  }
`
export const About = styled.div`
  border: solid 1px ${colors.salmon};
  border-top: none;
  padding: 8px;
  padding-top: 0;
`
export const ImgDiv = styled.div`
  height: 218px;
  position: relative;
`
