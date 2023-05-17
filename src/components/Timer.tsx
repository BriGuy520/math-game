import React from 'react';

type TimerProps = {
    handleTimerInput: (value: React.ChangeEvent<HTMLInputElement>) => void,
    timer: number,
}

const Timer = ({handleTimerInput, timer}: TimerProps) => {

    return (
        <>
            <h3>Timer</h3>

            <div>
                <input type="number" value={timer} onChange={handleTimerInput} /> 
            </div>
        </>
    )
}

export default Timer;