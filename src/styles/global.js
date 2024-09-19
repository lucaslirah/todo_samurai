import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  // html, body, #root {
  //   min-height: 100%;
  // }
  // body {
  //   background: ${(props) => props.theme.colors.gray900};
  //   color: ${(props) => props.theme.colors.gray600};
  //   font-family: ${(props) => props.theme.fontFamily.sans};
  //   padding: 1rem;
  // }

  // h1, h2, h3, h4, h5, h6 {
  //   font-family: ${(props) => props.theme.fontFamily.heading};
  //   font-weight: bold;
  //   color: ${(props) => props.theme.colors.white};
  // }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #ffeaa7;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  input,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  input,
  select,
  textarea {
    border: none;
    outline: none;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;
