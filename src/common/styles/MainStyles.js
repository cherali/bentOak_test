import { createGlobalStyle } from 'styled-components';

export const MainStyle = createGlobalStyle`
  @font-face {
    font-family: IRAN Sans Regular;
    src: url('/assets/fonts/IRAN Sans Regular.ttf');
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
    font-family: IRAN Sans Regular, tahoma !important;
    appearance: none;
  }

  body {
    direction: rtl;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p, span, strong {
    color: ${p => p.theme.colors.primaryColor};
  }

  h1 {
    font-size: ${p => p.theme.fontSize.xLarge};
    font-weight: 700;
  }

  h2 {
    font-size: ${p => p.theme.fontSize.large};
    font-weight: 700;
  }

  h3 {
    font-size: ${p => p.theme.fontSize.medium};
    font-weight: 500;
  }

  h4 {
    font-size: ${p => p.theme.fontSize.normal};
    font-weight: 500;
  }

  h5 {
    font-size: ${p => p.theme.fontSize.small};
    font-weight: 500;
  }

  h6 {
    font-size: ${p => p.theme.fontSize.xSmall};
    font-weight: 500;
  }
  
  p, span, strong {
    font-size: ${p => p.theme.fontSize.normal};
  }

  strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${p => p.theme.colors.secondaryColor};
  }

  input {
    outline: none;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${p => p.theme.colors.primaryColor};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${p => p.theme.colors.primaryColor};
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${p => p.theme.colors.primaryColor};
  }


  @media only screen and (max-width: 576px) {
    .Toastify__toast-container--bottom-right, .Toastify__toast-container--top-right {
      right: 0;
    }
  }
`