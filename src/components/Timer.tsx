import React from 'react';
import Button from './Button';

type TimerProps = {
    handleTimerInput: (value: React.ChangeEvent<HTMLInputElement>) => void,
    timer: number,
}

const Timer = ({handleTimerInput, timer}: TimerProps) => {

    return (
        <>
            <h3>Timer</h3>

            <div>
                <label htmlFor="timer">Seconds</label>
                <input id="timer" type="number" value={timer} onChange={handleTimerInput} /> 
            </div>
        </>
    )
}

export default Timer;