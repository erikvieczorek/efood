import styled from 'styled-components'
import { colors } from '../../styles '

export const BannerContainer = styled.div`
  height: 280px;
  background-size: cover;
  position: relative;
  margin-bottom: 56px;
`
export const TitleContainer = styled.div`
  font-size: 32px;
  color: ${colors.white};
  line-height: 37px;
`

export const Title = styled.h2`
  font-weight: 900;
  position: absolute;
  margin-top: 214px;
`
export const Category = styled.h3`
  font-weight: 100;
  position: absolute;
  margin-top: 24px;
`

export const Effect = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
`
