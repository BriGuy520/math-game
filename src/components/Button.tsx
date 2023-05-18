import React from 'react';

type ButtonProps = {
    children: String,
}

const Button = ({children}: ButtonProps) => {

    return (
        <>
            <button>{children}</button>
        </>
    )
}

export default Button;