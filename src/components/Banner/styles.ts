import styled from 'styled-components'
import { colors } from '../../styles '

export const BannerContainer = styled.div`
  margin-bottom: 56px;
  position: relative;
  height: 280px;
  background-size: cover;
`
export const TitleContainer = styled.div`
  width: 100%;
  color: ${colors.white};
`

export const Title = styled.h2`
  position: absolute;
  margin-top: 214px;
  line-height: 37px;
  font-size: 32px;
  font-weight: 900;
`
export const Category = styled.h3`
  position: absolute;
  margin-top: 24px;
  font-size: 32px;
  font-weight: 100;
  line-height: 37px;
`

export const Effect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
