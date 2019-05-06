// @flow
import React from 'react';
import styled from 'styled-components';

import { fontSize, media } from '../../styles/utils';

type Props = {
  name: string,
  color: string,
  onCount: Function
};

const ButtonStyle = styled.button`
  ${fontSize(14)};

  width: 80px;
  padding: 10px;
  border: solid 1px #ccc;
  outline: none;

  ${media.handheld`
    width: 270px;
  `}

  :active {
    opacity: 0.4;
  }

  :last-child {
    margin-right: none;
  }

  &.green {
    :hover {
      background-color: green;
    }
  }

  &.red {
    :hover {
      background-color: red;
    }
  }
`;

const Button = (props: Props) => {
  const { name, onCount, color } = props;

  return (
    <ButtonStyle className={color} onClick={onCount}>
      {name}
    </ButtonStyle>
  );
};
export default Button;
