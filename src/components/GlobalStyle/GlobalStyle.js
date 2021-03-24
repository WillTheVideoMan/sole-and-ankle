import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */
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
	    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
    	display: block;
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

    /* https://piccalil.li/blog/a-modern-css-reset
    Remove all animations and transitions for people that prefer not to see them
    */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        *,
        *::before,
        *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
        }
    }

    /* https://www.atipofoundry.com/fonts/geomanist
    Declare "Chaney" font rules
    */

    @font-face {
        font-family: "Chaney";
        src: url("/fonts/Chaney/chaney-ultraextended-webfont.woff2");
        font-style: normal;
        font-weight: 800;
        font-display: swap;
    }

    /* Custom Global Styles */
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        line-height: 1.45;
        font-family: 'Raleway', sans-serif;
    }
    html, body, #__next {
        min-height: 100%;
    }
    #__next {
        isolation: isolate;
    }
`;

export default GlobalStyles;
