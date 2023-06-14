import React from 'react';

type ButtonProps = {
    children: string,
    btnClasses: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = ({children, btnClasses, handleClick}: ButtonProps) => {

    return (
        <>
            <button onClick={handleClick} className={`btn ${btnClasses} m-2`}>{children}</button>
        </>
    )
}

export default Button;