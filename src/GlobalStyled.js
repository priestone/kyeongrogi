import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing:border-box;
}

body{
    color:#1d1d1d;
}

img{
    width:100%;
    display:block;
}

a{
    text-decoration:none;
    color:black;
}
`;
