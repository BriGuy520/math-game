import React from 'react';

type InputProps = {
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    checkGuess: React.KeyboardEventHandler<HTMLInputElement>,
    inputPlaceholder?: string,
    inputValue?: string,
}


const Input = ({handleChange, checkGuess, inputPlaceholder, inputValue}: InputProps) => {

    return (
        <>
            <input onChange={handleChange} placeholder={inputPlaceholder} onKeyDown={checkGuess} value={inputValue} className="input m-2 w-40" />
        </>
    )
}

export default Input;