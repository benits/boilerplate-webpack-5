import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/*
html5doctor.com Reset Stylesheet
v1.4.1
2010-03-01
Author: Richard Clark - http://richclarkdesign.com
*/
 
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
 
body {
    line-height:1;
    font-family: 'Ubuntu', sans-serif;

    &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fff;
    background-image: -webkit-gradient(
      linear,
      40% 0%,
      75% 84%,
      from(#0033cc),
      to(#0033cc),
      color-stop(0.6, #0033cc)
    );
  }
}

* {
    box-sizing: border-box
}
 
article,aside,canvas,details,figcaption,figure,
footer,header,hgroup,menu,nav,section,summary {
    display:block;
}
 
nav ul {
    list-style:none;
}

li {
  text-decoration:none
}
 
 blockquote, q {
    quotes:none;
}
 
blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}
 
a {
    margin:0;
    padding:0;
    border:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
 
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}
 
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}
 
del {
    text-decoration: line-through;
}
 
abbr[title], dfn[title] {
    border-bottom:1px dotted #000;
    cursor:help;
}
 
table {
    border-collapse:collapse;
    border-spacing:0;
}
 
hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}
 
input, select {
    vertical-align:middle;
}`

export default GlobalStyle
