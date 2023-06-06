import React from 'react';

type TimerProps = {
    timer: number,
}

const Timer = ({timer}: TimerProps) => {

    const [countdown, setCountdown] = React.useState<string>("");

    const formatTimer = (): string => {

        let timerLeft: number =  timer;
        let minutes: number|number = 0;
        let seconds: string|number = 0;

        while(timerLeft > 0){

            if(timerLeft >= 60){
                minutes += 1;
                timerLeft -= 60;
            } else {
                seconds = timerLeft % 60;
                timerLeft -= timerLeft % 60;
            } 
        }

        return `${minutes}:${seconds === 0 ? '00' : seconds}`;
    }



    return (
        <>
            <h3>Timer</h3>
            <div>
                <h1>{formatTimer()}</h1>
            </div>
        </>
    )
}

export default Timer;