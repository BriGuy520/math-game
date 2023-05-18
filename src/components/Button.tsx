import React from 'react';

type ButtonProps = {
    children: String,
}

const Button = ({children}: ButtonProps) => {

    return (
        <>
            <button className="btn btn-outline-primary m-2">{children}</button>
        </>
    )
}

export default Button;