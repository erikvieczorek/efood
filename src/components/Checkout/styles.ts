import styled from 'styled-components'
import { colors } from '../../styles '

export const Row = styled.div`
  display: block;
  margin-bottom: 24px;

  button {
    margin-top: 24px;
  }
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    margin-top: 8px;
    color: ${colors.lightSalmon};
    font-size: 14px;
    font-weight: 700;
  }

  input {
    width: 100%;
    border: none;
    padding: 6px;
    background-color: ${colors.lightSalmon};

    &.error {
      border: 2px solid #ffd700;
    }
  }
`

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 34px;

  &.gridVariant {
    grid-template-columns: 3fr 1fr;
  }
`

export const Container = styled.div`
  h3 {
    padding-bottom: 8px;
    color: ${colors.lightSalmon};
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${colors.lightSalmon};
  }
`

export const ErrorMessage = styled.div`
  margin-top: 2px;
  color: #ffd700;
  font-size: 12px;
`
