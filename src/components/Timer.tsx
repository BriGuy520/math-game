import React from 'react';
import Button from './Button';

export type TimerProps = {
    timeLeft: number,
    startGame: React.MouseEventHandler<HTMLButtonElement>,
    stopGame: React.MouseEventHandler<HTMLButtonElement>,
  }

const Timer = ({timeLeft, startGame, stopGame}: TimerProps) => {

    const formatTimer = (): string => {

        let timerLeft: number =  timeLeft;
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

        return `${minutes}:${seconds === 0 ? '00' : (seconds < 10 ? '0' + seconds : seconds)}`;
    }

    let timerColor: string = timeLeft <= 10 ? 'red' : '#000';

    return (
        <div className="timer-container">

            <div>
                <h1 style={{'color': timerColor}}>{formatTimer()}</h1>
                <Button btnClasses={"btn-outline-info"} handleClick={startGame}>Start</Button>
                <Button btnClasses={"btn-outline-danger"} handleClick={stopGame}>Stop</Button>
            </div>
        </div>
    )
}

export default Timer;