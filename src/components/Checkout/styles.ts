import styled from 'styled-components'
import { colors } from '../../styles '

type InputGroupProps = {
  maxWidth?: string
}

export const Row = styled.div`
  display: block;
  margin-bottom: 24px;

  h3 {
    margin-bottom: 16px;
    color: ${colors.lightSalmon};
    font-size: 16px;
    font-weight: 700;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    color: ${colors.lightSalmon};
    font-size: 14px;
    font-weight: 700;
  }

  input {
    width: 100%;
    border: none;
    padding: 6px;
    margin-bottom: 8px;
    background-color: ${colors.lightSalmon};
  }
`

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 34px;
`

export const Container = styled.div``
