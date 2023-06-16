import React from 'react';

type InputProps = {
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    checkGuess?: React.KeyboardEventHandler<HTMLInputElement>,
    timeLeft?: number,
    inputPlaceholder?: string,
    inputValue?: string,
}


const Input = ({handleChange, checkGuess, timeLeft, inputPlaceholder, inputValue}: InputProps) => {

    return (
        <>
            <input disabled={timeLeft === 0} onChange={handleChange} placeholder={inputPlaceholder} onKeyDown={checkGuess} value={inputValue} className="input m-2 w-40" />
        </>
    )
}

export default Input;