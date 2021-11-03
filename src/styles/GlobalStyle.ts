import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  :root {
    --background: #e8e8e8;
    --background-header: #3B3B3B;

    --white: #ffffff;

    --title: #1e2022;
    --sub-title: #77838f;
    --placeholder-title: #99a2aa;

    --border: #d5dae2;
    --button-link: #2a26d9;

    --button-danger: #ff0000;

    --hour-title: #808080;
    --hour-button-selected: #707070;

    --filters: #f2f3f4;

    --bg-accent: #384a4d;
    --text-color-nav: #dadce1;
    --navbar-size: 80px;
    --border-nav: 1px solid #474a4d;
    --border-radius-nav: 8px;
    --speed-nav: 500ms;

    font: 400 14px "Montserrat", sans-serif;
  }
  body {
    background-color: var(--background);
  }
  body, button, input, span, textarea, select {
    font: 400 14px "Montserrat", sans-serif;
  }
  button {
    cursor: pointer;
  }

  select, input[type="time"] {
    appearance: none;
    cursor: pointer;
    background: white;
  }
`;
