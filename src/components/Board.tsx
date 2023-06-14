import React from 'react';

import Input from './Input';

export type BoardProps = {
  operators: string[],
}

const Board = ({operators}: BoardProps) => {

  const [firstValue, setFirstValue] = React.useState(Math.floor(Math.floor(Math.random() * 100)));
  const [secondValue, setSecondValue] = React.useState(Math.floor(Math.floor(Math.random() * 100)));

  const [guess, setGuess] = React.useState<string>("");

  const selectedOperator: string = operators[Math.floor(Math.random() * operators.length)];
  let displayOperator: string = selectedOperator == "Addition" ? "+" : (selectedOperator == "Substraction" ? "-" : (selectedOperator == "Multiplication" ? "x" : "/"));
  let answer: number;


  
  if(selectedOperator === "Addition"){
    displayOperator = "+";
  } else if(selectedOperator === "Subtraction"){
    displayOperator = "-";
  } else if(selectedOperator === "Multiplication"){
    displayOperator = "x";
  } else if(selectedOperator === "Divsion"){
    displayOperator = "/";
  }


    /* Game */

  const handleGuess = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setGuess(e.target.value);
  }

  const checkGuess = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if(e.key === 'Enter'){

      switch(selectedOperator){

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
    }

  }

  console.log(displayOperator);

  return (
    
    <div className="board-container">
      <p>{firstValue} {displayOperator} {secondValue}</p>
      <Input handleChange={handleGuess} checkGuess={checkGuess} inputValue={guess} />
    </div>
  );

}

export default Board;