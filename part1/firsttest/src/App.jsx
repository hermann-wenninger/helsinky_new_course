
const App = () => {

  const now = new Date()
  let a = 100
  let b = 200
  console.log(now, a+b)
  let name= 'karl'
  let age = 23
  const gloria = 'vollkommen outof range'


  return (
  <>
  <h1> a + b = {a+b}</h1>
  <Abc gloria={gloria}/>
  <Hello name='hmann' age='59' />
  <Hello name={name} age={age} />
    </>
  )
}

export default App
const Abc = (props)=>{
 return (
    <div className="xxx">goloria von {props.gloria}</div>
  )
}
const Hello = (props)=>{
  return([
    <h5 style={{color:'red', fontFamily:'fantasy'}}>Greetings</h5>,
    <h2>Hallo {props.name} you are jears {props.age} old</h2>
  ])
}