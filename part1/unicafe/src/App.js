import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = ({ good, neutral, bad, text,value}) => {
  const all = good + neutral + bad;


  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )}
    if(all > 0){
      return (
      <div>
      {text} - {value}
      </div>
    )
  }
}


const  App = () => {

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
     
     <Statistics good={good} neutral={neutral} bad={bad} text='good' value={good}/>
     <Statistics good={good} neutral={neutral} bad={bad} text='neutral' value={neutral}/>
     <Statistics good={good} neutral={neutral} bad={bad} text='bad' value={bad}/>
     <Statistics good={good} neutral={neutral} bad={bad} text='all' value={good + neutral + bad}/>
     <Statistics good={good} neutral={neutral} bad={bad} text='average' value={(good - bad)/(good + neutral + bad)}/>
     <Statistics good={good} neutral={neutral} bad={bad} text='positive in percent' value={good/((good + neutral + bad)/100)}/>
    </div>
  )
};

export default App