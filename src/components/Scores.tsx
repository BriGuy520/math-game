import React from 'react';

type ScoresProps = {
  highScores: number[],
}

const Scores = ({highScores}: ScoresProps) => {

  const highScoresList = highScores.sort((a:number, b:number) => b - a).map((score, idx) =>  <li key={idx}>{score}</li>);


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