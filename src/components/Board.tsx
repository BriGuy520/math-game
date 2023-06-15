import React from 'react';

import Input from './Input';

export type BoardProps = {
  operators: string[],
}

const Board = ({operators}: BoardProps) => {

  const [firstValue, setFirstValue] = React.useState(Math.floor(Math.floor(Math.random() * 20)));
  const [secondValue, setSecondValue] = React.useState(Math.floor(Math.floor(Math.random() * 20)));
  const [operator, setOperator] = React.useState(operators[Math.floor(Math.random() * operators.length)]);

  const [guess, setGuess] = React.useState<string>("");

  const [correct, setCorrect] = React.useState<number>(0);

  const displayOperator: string = operator == "Addition" ? "+" : (operator == "Substraction" ? "-" : (operator == "Multiplication" ? "x" : "/"));
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
  
      if(answer === parseInt(guess)){
        setCorrect(correct + 1);
      }

      setFirstValue(Math.floor(Math.floor(Math.random() * 20)));
      setSecondValue(Math.floor(Math.floor(Math.random() * 20)));
      setOperator(operators[Math.floor(Math.random() * operators.length)]);
      setGuess("");

    }
  }

  return (
    
    <div className="board-container">
      <div className="score-container">
        <p>Correct Answers: <b>{correct}</b></p>
      </div>
      <div className="guess-container">
        <p>{firstValue} {displayOperator} {secondValue} = </p>
        <Input handleChange={handleGuess} checkGuess={checkGuess} inputValue={guess} /> 
      </div>
    </div>
  );

}

export default Board;