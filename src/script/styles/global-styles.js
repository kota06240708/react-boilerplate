import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
// import css1 from "slick-carousel/slick/slick.css";
// import css2 from "slick-carousel/slick/slick-theme.css";

const GlobalStyles = createGlobalStyle`
	${reset}

	html {
		font-family: Hiragino Kaku Gothic ProN, 'ヒラギノ角ゴ ProN W3', sans-serif;
		font-size: 62.5%;
    overflow-y: visible;
	}

	body {
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		line-height: 1.4;
		letter-spacing: 0.15em;
		position: relative;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 100%;
	}

	li {
		list-style: none
	}
`;

export default GlobalStyles;
