import { useState, useSyncExternalStore } from "react";
const Header = ({ title }) => {
  return <h1>{title}</h1>;
};
const Button = ({ buttonName, handleButton }) => {
  return <button onClick={handleButton}>{buttonName}</button>;
};
const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (good || neutral || bad || all || average || positive)
    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive * 100}%</p>
      </div>
    );
  else return <h4>No feedback given</h4>;
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [score, setScore] = useState(0);
  const [average, setAverage] = useState(0);

  return (
    <div>
      <Header title="give feedback" />
      <Button
        buttonName="good"
        handleButton={() => {
          let newAll = all + 1;
          let newScore = score + 1;
          setScore(newScore);
          setAverage(newScore / newAll);
          setAll(newAll);
          setGood(good + 1);
        }}
      />
      <Button
        buttonName="neutral"
        handleButton={() => {
          let newAll = all + 1;
          setAverage(score / newAll);
          setAll(all + 1);
          setNeutral(neutral + 1);
        }}
      />
      <Button
        buttonName="bad"
        handleButton={() => {
          let newAll = all + 1;
          let newScore = score - 1;
          setScore(newScore);
          setAverage(newScore / newAll);
          setAll(newAll);
          setBad(bad + 1);
        }}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={good / all || 0}
      />
    </div>
  );
};

export default App;
