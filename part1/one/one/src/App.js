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

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const App = () => {

  const [total, setTotal] = useState(0)

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })


  const [allClicksx, setAllx] = useState([])
  const handleLeftClickx = () => {
    setAllx(allClicksx.concat('L'))
    setLeft(left + 1)
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClickx = () => {
    setAllx(allClicksx.concat('R'))
    setRight(right + 1)
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
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
  <Button  handleClick={decreaseByOne} text='minus one' /><br></br>

  {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
      <br></br>

      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
<br></br>
      {left}
      <button onClick={handleLeftClickx}>left</button>
      <button onClick={handleRightClickx}>right</button>
      {right}
      <p>{allClicksx.join(' ')}</p>
      <p>total {total} TOTAL</p>
      <br></br>
      <History allClicks={allClicksx} />
  </div>
  )
}

export default App

