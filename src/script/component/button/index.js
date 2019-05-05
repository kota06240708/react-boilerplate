// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  name: string,
  color: string,
  onCount: Function
};

const ButtonStyle = styled.button`
  width: 80px;
  font-size: 2.4rem;
  padding: 10px;
  border: solid 1px #ccc;
  outline: none;

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
