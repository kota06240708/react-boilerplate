// @flow
import React from 'react';
import classNames from 'classnames';
import { button, isGreen, isRed } from './style.sass';

type Props = {
  name: string,
  color: string,
  onCount: Function
};

const Button = (props: Props) => {
  const { name, onCount, color } = props;
  const className = classNames({
    [button]: true,
    [isGreen]: color === 'green',
    [isRed]: color === 'red',
  });

  return (
    <button className={className} onClick={onCount}>
      {name}
    </button>
  );
};
export default Button;
