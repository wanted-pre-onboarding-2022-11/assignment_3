import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
 ${reset}
 html { font-size: 62.5%;
	font-family: 'Inter', sans-serif;
 }
 button,a {all:unset}
 div,li{
	box-sizing: border-box;
 }

 #root{
	display:flex ;
	justify-content:center ;
 }
`;

export default GlobalStyle;
