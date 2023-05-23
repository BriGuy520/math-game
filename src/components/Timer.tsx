import React from 'react';
import Button from './Button';

type TimerProps = {
    handleTimerInput: (value: React.ChangeEvent<HTMLInputElement>) => void,
    handleSetTimer: React.MouseEventHandler<HTMLButtonElement>,
    timer: number,
}

const Timer = ({handleTimerInput, handleSetTimer, timer}: TimerProps) => {

    return (
        <>
            <h3>Timer</h3>

            <div>
                <label htmlFor="timer">Seconds</label>
                <input id="timer" type="number" value={timer} onChange={handleTimerInput} /> 
                <Button handleClick={handleSetTimer}>Set Timer</Button>
            </div>
        </>
    )
}

export default Timer;