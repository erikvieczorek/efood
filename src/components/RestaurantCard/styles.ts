import styled from 'styled-components'
import { breakpoints, colors } from '../../styles '

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  height: 190px;
  border: solid 1px ${colors.salmon};
  border-top: none;

  @media (max-width: ${breakpoints.tablet}) {
    height: unset;
  }
`

export const Card = styled.div`
  width: 472px;
  background-color: ${colors.white};

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 10px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const Rate = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
  }
`
export const ImgDiv = styled.div`
  height: 218px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
