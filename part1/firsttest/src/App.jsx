
const App = () => {

  const now = new Date()
  let a = 100
  let b = 200
  console.log(now, a+b)


  return (
  <>
  <h1> a + b = {a+b}</h1>
  <Abc />
  <Hello name='hmann' age='59' />
    </>
  )
}

export default App
const Abc = ()=>{
 return (
    <div className="xxx">goloria in exzelsior</div>
  )
}
const Hello = (props)=>{
  return(
    <h2>Hallo {props.name} you are jears {props.age} old</h2>
  )
}