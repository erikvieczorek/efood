import styled from 'styled-components'
import remove from '../../assets/images/icons/remove.svg'
import { breakpoints, colors } from '../../styles '

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  display: none;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  &.is-open {
    display: flex;
  }
`

export const CartList = styled.ul`
  max-height: 74vh;
  overflow-y: scroll;

  @media (max-width: ${breakpoints.tablet}) {
    max-height: 64vh;
    overflow-y: scroll;
  }
`

export const Sidebar = styled.aside`
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.salmon};

  .empty-text {
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
    color: ${colors.lightSalmon};
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }
`

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.lightSalmon};
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  padding: 8px 0 12px 8px;
  height: 100px;
  max-height: 100%;
  background-color: ${colors.lightSalmon};
  margin-bottom: 8px;

  img {
    margin-right: 8px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }

  span {
    font-size: 14px;
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    background-image: url(${remove});
    cursor: pointer;
  }
`
