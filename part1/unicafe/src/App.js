import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = ({text,value}) => {
  return(
    <>
     <tr><td>{text}:</td><td>{value}</td></tr> 
    </>)
};

const Statistics = ({ good, neutral, bad}) => {
  const all = good + neutral + bad;


  if (all === 0) {
    return (
      <div>
        <p>Nobody has given feedback!</p>
      </div>
    )}
    if(all > 0){
      return (
      <div><table><tbody>
     <StatisticLine text='good' value={good} />
     <StatisticLine text='neutral' value={neutral} />
     <StatisticLine text='bad' value={bad} />
     <StatisticLine text='all' value={good + neutral + bad} />
     <StatisticLine text='average' value={Math.abs((good - bad) / all)} />
     <StatisticLine text='positive' value={Math.abs((good / all) * 100)} />
    </tbody></table>
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
    
    </div>
  )
};

export default App