import { useState } from 'react'

const Display = (props) => {
  return (
    <div>haleluia{props.counter}</div>
  )
}
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const increaseByOne = () => setCounterx(counterx + 1)
  const decreaseByOne = () => setCounterx(counterx - 1)
  const setToZero = () => setCounterx(0)
  let [ counterx, setCounterx ] = useState(0)
  const [ counter, setCounter ] = useState(0)
  let [vari, funci] = useState(333333)
  let [lunki, flunki] = useState(333333)
  //let funci = function (){return vari -1}
  setTimeout(() => setCounter(counter + 1),500)
  setTimeout(()=> funci(vari-1),10);
  //const flunki = function(){return lunki + 1111};
  setTimeout(()=>flunki(lunki + 1111),1);

  return (
  <div>{counter} ##### {vari} ######{lunki} ********{counterx}
  
  <button onClick={() => setCounterx(counterx + 1)}>plus</button>
  <button onClick={() => setCounterx(counterx = 0)}> zero</button><br></br>
  <button onClick={increaseByOne}>plus</button>
  <button onClick={setToZero}> {counterx}</button>
  <Display counter={counterx} />
  <Button  handleClick={increaseByOne} text='plus' />
  <Button  handleClick={setToZero} text='tozero' />
  <Button  handleClick={decreaseByOne} text='minus one' />
  </div>
  )
}

export default App

