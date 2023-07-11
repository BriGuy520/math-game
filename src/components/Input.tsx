import React from 'react';

type InputProps = {
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    checkGuess?: React.KeyboardEventHandler<HTMLInputElement>,
    startTimer: boolean,
    timeLeft?: number,
    inputPlaceholder?: string,
    inputValue?: string,
}


const Input = ({handleChange, checkGuess, startTimer, timeLeft, inputPlaceholder, inputValue}: InputProps) => {

    const gameInProgress = React.useRef<HTMLInputElement>(null);


    React.useEffect(() => {

        if(startTimer){
            gameInProgress.current?.focus();
        }

    }, [gameInProgress]);


    return (
        <>
            <input ref={gameInProgress} disabled={timeLeft === 0} onChange={handleChange} placeholder={inputPlaceholder} onKeyDown={checkGuess} value={inputValue} className="input m-2 w-25" />
        </>
    )
}

export default Input;