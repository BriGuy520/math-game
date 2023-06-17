import React from 'react';

import Input from './Input';
import Scores from './Scores';


export type BoardProps = {
  timeLeft: number,
  startTimer: boolean,
  operators: string[],
}

const Board = ({timeLeft, startTimer, operators}: BoardProps) => {

  const [firstValue, setFirstValue] = React.useState<number>(Math.floor(Math.floor(Math.random() * 20)));
  const [secondValue, setSecondValue] = React.useState<number>(Math.floor(Math.floor(Math.random() * 20)));
  const [operator, setOperator] = React.useState<string>(operators[Math.floor(Math.random() * operators.length)]);

  const [guess, setGuess] = React.useState<string>("");

  const [correct, setCorrect] = React.useState<number>(0);

  const displayOperator: string = operator == "Addition" ? "+" : (operator == "Subtraction" ? "-" : (operator == "Multiplication" ? "x" : "/"));
  let answer: number;

   /* Game */

  const handleGuess = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setGuess(e.target.value);
  }

  const checkGuess = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if(e.key === 'Enter'){

      switch(operator){

        case 'Addition':
          answer = firstValue + secondValue;
          break;
        case 'Subtraction':
          answer = firstValue - secondValue;
          break;
        case 'Multiplication':
          answer = firstValue * secondValue;
          break;
        default:
          answer = firstValue / secondValue;  
          break;
      }

      console.log(answer);
  
      if(answer === parseInt(guess) && timeLeft > 0){
        setCorrect(correct + 1);
      }

      setFirstValue(Math.floor(Math.floor(Math.random() * 10)));
      setSecondValue(Math.floor(Math.floor(Math.random() * 10)));
      setOperator(operators[Math.floor(Math.random() * operators.length)]);
      setGuess("");

    }
  }

  return (
    
    <div className="board-container">
      <div className="play-container">
        <div className="score-container">
          <p>Correct Answers: <b>{correct}</b></p>
        </div>
          {operators.length > 0 && startTimer ? 
              <div className="guess-container">
                    <h2>{firstValue} {displayOperator} {secondValue} = </h2>
                    <Input timeLeft={timeLeft} handleChange={handleGuess} checkGuess={checkGuess} inputValue={guess} /> 
              </div>
            :
            <div className="guess-container">
              <p>Please select your operators and start timer</p>
            </div>
          }
      </div>
      <div className="scores-container">
        <Scores />
      </div>
    </div>
  );

}

export default Board;