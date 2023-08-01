import { useState } from 'react'

const App = () => {
  const [ counterx, setCounterx ] = useState(0)
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
  
  <button onClick={() => setCounterx(counterx + 1)}>
  plus
</button>
  </div>
  )
}

export default App

