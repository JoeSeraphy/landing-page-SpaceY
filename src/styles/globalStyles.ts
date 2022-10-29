import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --space: #0b1e8a;
    --space-ligth: #3d68b2;
    --space-dark: #040327;
    --gray-01: #0d0e13;
    --gray-02: #2c2d3a;
    --gray-03: #60616f;
    --gray-04: #898a93;
    --gray-05: #d5d5db;
    --mars: #e85937;
    --mars-ligth: #ff8c70;
    --mars-dark: #cf3f1d;
    --sun: #f5d15f;
    --uranus: #24ffe9;
    --jupiter: #e00e34;
    --earth: #0fdd86;
    --saturn: #554ad7;
  
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
 }

body {
    margin: 0 auto;
    display: grid;
    font-family: 'Heebo', sans-serif; 
}

ul {
    list-style: none;
}
`;
