import React from 'react';

type InputProps = {
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    inputValue: string
}


const Input = ({handleChange, inputValue}: InputProps) => {

    return (
        <>
            <input onChange={handleChange} placeholder={inputValue} className="input m-2 w-40" />
        </>
    )
}

export default Input;