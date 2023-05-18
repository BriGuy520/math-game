import React from 'react';

import Input from './Input';
import Button from './Button';

const SettingsBar = () => {

    return (
        <>
            <h3>Settings</h3>   
                <div className="settings-bar-section">
                    <div className="timer-settings">
                        <p><strong>Timer</strong></p>
                        <div className="timer-fields">
                            <Input inputValue={"Minutes"} />
                            <Input inputValue={"Seconds"} />
                        </div>
                    </div>
                    <div className="level-settings">
                        <p><strong>Level</strong></p>
                        <div className="level-buttons">
                            <Button>Easy</Button>
                            <Button>Medium</Button>
                            <Button>Hard</Button>
                        </div>
                    </div>
                    <div className="operators-settings">
                        <p><strong>Operators</strong></p>
                        <Button>Addition</Button>
                        <Button>Subtraction</Button>
                        <Button>Multiplication</Button>
                        <Button>Division</Button>
                    </div>
                </div>
        </>        
    );
}


export default SettingsBar;