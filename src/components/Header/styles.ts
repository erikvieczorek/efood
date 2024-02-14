import styled from 'styled-components'
import backgroundVector from '../../assets/images/Vector.png'
import { breakpoints, colors } from '../../styles '

export const HeaderBar = styled.ul`
  height: 186px;
  background-image: url(${backgroundVector});
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 100%;
  padding-bottom: 43px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
  }
`

export const LinkItem = styled.li`
  text-align: start;
  font-size: 18px;
  font-weight: 900;

  a {
    color: ${colors.salmon};
  }

  &:nth-child(1) {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  &:nth-child(2) {
    text-align: center;
  }

  &:nth-child(3) {
    text-align: end;

    @media (max-width: ${breakpoints.tablet}) {
      padding-top: 24px;
    }
  }
`
export const CartButton = styled.a`
  cursor: pointer;
`
