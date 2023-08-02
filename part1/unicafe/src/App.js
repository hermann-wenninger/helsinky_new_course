import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseplus = () => setGood(good + 1);
  const increaseneutral = () => setNeutral(neutral + 1);
  const increaseminus = () => setBad(bad + 1);

  return (
    <div>
    <p>give feedback</p>
     <Button handleClick={increaseplus} text="plus" />
     <Button handleClick={increaseneutral} text="neutral" />
     <Button handleClick={increaseminus} text="minus" /><br></br>
     <p>statistics</p>
     <p>good {good}</p>
     <p>neutral {neutral}</p>
     <p>bad {bad}</p>
    </div>
  )
}

export default App


