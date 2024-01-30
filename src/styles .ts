import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  lightSalmon: '#FFEBD9',
  salmon: '#E66767',
  yellow: '#FFB930'
}

export const GlobalCss = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Roboto, sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body {
        color: ${colors.salmon};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
`
