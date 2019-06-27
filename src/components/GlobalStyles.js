import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');
    @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400');
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
                'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
  }

  a {
    border-bottom: 1px solid transparent;
    color: ${props => props.theme.link};
    text-decoration: none;
    transition: color ${props =>
      props.theme.transitionEase}, border ${props =>
  props.theme.transitionEase};

    &:focus,
    &:hover {
      border-bottom-color: ${props => props.theme.text};
      color: ${props => props.theme.text};
    }
  }

  button, input {
    border: 1px solid ${props => props.theme.border};
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 0.5rem 1rem;
  }

  input {
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  a:focus,
  button:focus,
  input:focus {
    outline: thin dotted;
  }

  ::placeholder {
    color: ${props => props.theme.placeholder};
  }

  form {
    width: 100%;
  }

  svg {
    fill: currentColor;
  }

  pre, code {
    background-color: ${props => props.theme.lighterGrey};
    font-family: 'Source Code Pro', Monaco, courier, monospace;
    font-size: 0.85rem;
  }

  code {
    border-radius: 2px;
    padding: 2px 5px;
    white-space: nowrap;
  }
`;
