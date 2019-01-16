// @flow
import React from 'react';

type Props = {
    name: string,
    onCount: Function
};

const Button = (props: Props) => {
    const { name, onCount } = props;
    return (
        <div className="button">
            <button onClick={onCount}>{name}</button>
        </div>
    );
};
export default Button;
