import React, { MouseEventHandler } from 'react';

import Input from './Input';
import Button from './Button';

type SettingsBarProps = {
    handleLevelClick: React.MouseEventHandler<HTMLButtonElement>,
    handleSetSeconds: React.ChangeEventHandler<HTMLInputElement>,
    handleSetMinutes: React.ChangeEventHandler<HTMLInputElement>,
    handleSetTimer: React.MouseEventHandler<HTMLButtonElement>,
    handleOperatorClick: MouseEventHandler<HTMLButtonElement>,
    level: string,
    timer: number,
}

const SettingsBar = ({level, timer, handleLevelClick, handleSetSeconds, handleSetMinutes, handleSetTimer, handleOperatorClick}: SettingsBarProps) => {

    return (
        <>
            <h3>Settings</h3>   
                <div className="settings-bar-section">
                    <div className="timer-settings">
                        <p><strong>Timer: {timer}</strong></p>
                        <div className="timer-fields">
                            <Input handleChange={handleSetMinutes} inputValue={"Minutes"} />
                            <Input handleChange={handleSetSeconds} inputValue={"Seconds"} />
                            <Button handleClick={handleSetTimer}>Set Timer</Button>
                        </div>
                    </div>
                    <div className="level-settings">
                        <p><strong>Level: {level}</strong></p>
                        <div className="level-buttons">
                            <Button handleClick={handleLevelClick}>Easy</Button>
                            <Button handleClick={handleLevelClick}>Medium</Button>
                            <Button handleClick={handleLevelClick}>Hard</Button>
                        </div>
                    </div>
                    <div className="operators-settings">
                        <p><strong>Operators</strong></p>
                        <Button handleClick={handleOperatorClick}>Addition</Button>
                        <Button handleClick={handleOperatorClick}>Subtraction</Button>
                        <Button handleClick={handleOperatorClick}>Multiplication</Button>
                        <Button handleClick={handleOperatorClick}>Division</Button>
                    </div>
                </div>
        </>        
    );
}


export default SettingsBar;