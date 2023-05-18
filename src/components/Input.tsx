import React from 'react';

type InputProps = {
    inputValue: string
}


const Input = ({inputValue}: InputProps) => {

    return (
        <>
            <input placeholder={inputValue} className="input m-2 w-50" />
        </>
    )
}

export default Input;