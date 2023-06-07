import React, { MouseEventHandler } from 'react';

import Input from './Input';
import Button from './Button';

type SettingsBarProps = {
    handleLevelClick: React.MouseEventHandler<HTMLButtonElement>,
    handleSetSeconds: React.ChangeEventHandler<HTMLInputElement>,
    handleSetMinutes: React.ChangeEventHandler<HTMLInputElement>,
    handleSetTimer: React.MouseEventHandler<HTMLButtonElement>,
    handleOperatorClick: MouseEventHandler<HTMLButtonElement>,
    operators: string[],
    level: string,
    timer: number,
}

const SettingsBar = ({operators, level, timer, handleLevelClick, handleSetSeconds, handleSetMinutes, handleSetTimer, handleOperatorClick}: SettingsBarProps) => {

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

        return `${minutes}:${seconds === 0 ? '00' : (seconds < 10 ? '0' + seconds : seconds)}`;
    }

    return (
        <>
            <h3>Settings</h3>   
                <div className="settings-bar-section">
                    <div className="timer-settings">
                        <p><strong>Timer: </strong>{formatTimer()}</p>
                        <div className="timer-fields">
                            <Input handleChange={handleSetMinutes} inputValue={"Minutes"} />
                            <Input handleChange={handleSetSeconds} inputValue={"Seconds"} />
                            <Button btnClasses={"btn-outline-primary"} handleClick={handleSetTimer}>Set Timer</Button>
                        </div>
                    </div>
                    <div className="level-settings">
                        <p><strong>Level: </strong>{level}</p>
                        <div className="level-buttons">
                            <Button btnClasses={level.includes("Easy") ? "btn-success" : "btn-outline-success"} handleClick={handleLevelClick}>Easy</Button>
                            <Button btnClasses={level.includes("Medium") ? "btn-warning" : "btn-outline-warning"} handleClick={handleLevelClick}>Medium</Button>
                            <Button btnClasses={level.includes("Hard") ? "btn-danger" : "btn-outline-danger"} handleClick={handleLevelClick}>Hard</Button>
                        </div>
                    </div>
                    <div className="operators-settings">
                        <p><strong>Operators: </strong>{operators.join(", ")}</p>
                        <Button btnClasses={operators.includes("Addition") ? "btn-primary" : "btn-outline-primary"} handleClick={handleOperatorClick}>Addition</Button>
                        <Button btnClasses={operators.includes("Subtraction") ? "btn-primary" : "btn-outline-primary"} handleClick={handleOperatorClick}>Subtraction</Button>
                        <Button btnClasses={operators.includes("Multiplication") ? "btn-primary" : "btn-outline-primary"} handleClick={handleOperatorClick}>Multiplication</Button>
                        <Button btnClasses={operators.includes("Division") ? "btn-primary" : "btn-outline-primary"} handleClick={handleOperatorClick}>Division</Button>
                    </div>
                </div>
        </>        
    );
}


export default SettingsBar;