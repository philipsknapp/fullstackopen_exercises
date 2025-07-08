import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({stat, text}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{stat}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  function sum() {
    return good + neutral + bad;
  }

  function average() {
    if (sum() === 0) return 0;

    return (good - bad) / sum();
  }

  function posPercentage() {
    if (sum() === 0) return 0;
    
    return String((good / sum()) * 100) + ' %';
  }

  return (
    <table><tbody>
      <StatisticLine stat={good} text="good" />
      <StatisticLine stat={neutral} text="neutral" />
      <StatisticLine stat={bad} text="bad" />
      <StatisticLine stat={sum()} text="all" />
      <StatisticLine stat={average()} text="average" />
      <StatisticLine stat={posPercentage()} text="positive" />
    </tbody></table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function makeRater(state, setter) {
    return () => { setter(state + 1)}
  }

  const rateGood = makeRater(good, setGood);
  const rateNeutral = makeRater(neutral, setNeutral);
  const rateBad = makeRater(bad, setBad);

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={rateGood} text="good" />
      <Button onClick={rateNeutral} text="neutral" />
      <Button onClick={rateBad} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App