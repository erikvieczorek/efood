import styled from 'styled-components'
import { breakpoints, colors } from '../../styles '

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

export const Modal = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  width: 1024px;
  height: 344px;
  padding: 32px;
  background-color: ${colors.salmon};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
  }

  img {
    object-fit: cover;
    width: 280px;
    height: 280px;
    margin-right: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 0;
      width: 100%;
    }
  }

  > img {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
  }

  ${Description} {
    margin: 16px 0;
  }
`
