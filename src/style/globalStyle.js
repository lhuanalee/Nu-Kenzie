import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-style: none;
    list-style: none;
    text-decoration: none;
}

body {
    
    height: 100vh;

    display: flex;
    flex-direction: column;

    font-family: var(--font-family-default);

    color: var(--white)
}

:root {
    /* Colors */
    --color-primary: #FD377E;
    --color-primary-2: #E34981;
    --color-secundary: #03B898;
    --color-terciary: #ff0000;
    --grey-1: #F8F9FA;
    --grey-2: #E9ECEF;
    --grey-3: #868E96;
    --grey-4: #212529;
    --white: #ffffff;
    --black: #000000;

    /* Font-family */
    --font-family-default: 'Nunito', sans-serif;

    /* Font-size */
    --title-size-1: 28px;
    --title-size-2: 24px;
    --title-size-3: 20px;
    --title-size-4: 14px;
    --headline-size: 16px;
    --body-size: 12px;
    
    /* Font-weight */
    
    --title-weight-1: bold;
    --title-weight-2: bold;
    --title-weight-3: bold;
    --title-weight-4: 700;
    --headline-weight: 500;
    --body-weight: 400;
}
`;

export default GlobalStyle;
