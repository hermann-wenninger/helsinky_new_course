import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const Statistics = (props) => {
  if (props = undefined){
    return 'keine Statistics';
  }
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseplus = () => setGood(good + 1);
  const increaseneutral = () => setNeutral(neutral + 1);
  const increaseminus = () => setBad(bad + 1);

  return (
    <div>
    <p><h1>give feedback</h1></p>
     <Button handleClick={increaseplus} text="plus" />
     <Button handleClick={increaseneutral} text="neutral" />
     <Button handleClick={increaseminus} text="minus" /><br></br>
     <p><h2>statistics</h2></p>
     <p>good {good}</p>
     <p>neutral {neutral}</p>
     <p>bad {bad}</p>
     <p>all {good + neutral + bad}</p>
     <p>average {(good - bad)/(good + neutral + bad)}</p>
     <p>positive in percent: {good/((good + neutral + bad)/100)} %</p>
     <Statistics props='' />
    </div>
  )
}

export default App


