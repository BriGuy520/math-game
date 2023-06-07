import React from 'react';

type InputProps = {
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    inputPlaceholder?: string,
    inputValue?: string,
}


const Input = ({handleChange, inputPlaceholder, inputValue}: InputProps) => {

    return (
        <>
            <input onChange={handleChange} placeholder={inputPlaceholder} value={inputValue} className="input m-2 w-40" />
        </>
    )
}

export default Input;