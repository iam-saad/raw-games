import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
  scroll-behavior: smooth;
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: darkgrey;
  }
  &::-webkit-scrollbar-track {
   background: white;
  }
}

body{
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  background-color: #151515;
  color: white;
}
h2{
  font-size: 7rem;
  font-family: 'Abril Fatface', cursive;
  font-weight: lighter;
}
h3{
  font-size: 1.8rem;
  padding: 1.5rem 0rem;
}
p{
  font-size: 1.5rem;
  line-height: 200%;
}
a{
  text-decoration: none;
}
img{
  display: block;
}
input{
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
}`;

export default GlobalStyles;
