import { css } from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (min-width: 1279px) {
      // pc
      ${css(...args)};
    }
  `,
  handheld320: (...args) => css`
    @media (max-width: 374px) {
      //sp
      ${css(...args)};
    }
  `
};

export const fontSize = size => `
  font-size: ${size}px;
  font-size: ${size * 0.1}rem;
`;
