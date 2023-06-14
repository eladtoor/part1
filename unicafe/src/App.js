import { useState } from "react";
const Header = ({ title }) => {
  return <h1>{title}</h1>;
};
const Button = ({ buttonName, handleButton }) => {
  return <button onClick={handleButton}>{buttonName}</button>;
};
const Display = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header title="give feedback" />
      <Button
        buttonName="good"
        handleButton={() => {
          setGood(good + 1);
        }}
      />
      <Button
        buttonName="neutral"
        handleButton={() => {
          setNeutral(neutral + 1);
        }}
      />
      <Button
        buttonName="bad"
        handleButton={() => {
          setBad(bad + 1);
        }}
      />
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
