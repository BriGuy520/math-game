import React from 'react';

type ButtonProps = {
    children: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = ({children, handleClick}: ButtonProps) => {

    return (
        <>
            <button onClick={handleClick} className="btn btn-outline-primary m-2">{children}</button>
        </>
    )
}

export default Button;