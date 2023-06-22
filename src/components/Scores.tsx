import React from 'react';

type ScoresProps = {
  correct: number,
}

const Scores = ({correct}: ScoresProps) => {

  let highScores: number[] = [];

  const newHighScores = [...highScores, correct].sort();

  const highScoresList = newHighScores.map((score, idx) =>  <li key={idx}>{score}</li>);

  return (
    <> 
      <h4>High Scores</h4>
      <ol>
        {highScoresList}
      </ol>
    </>
  );
}

export default Scores;