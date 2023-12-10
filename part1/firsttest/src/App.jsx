
const App = () => {

  const now = new Date()
  let a = 100
  let b = 200
  console.log(now, a+b)
  let name= 'karl'
  let age = 23
  const gloria = 'vollkommen outof range'
  const fre = [
    {name:'julius', age:27},
    {name:'arnika', age:55},
    {name:'leroi', age:33},
    {name:'alexandra', age:46}
  ]
  var xyz = ['ludwig ', 21]


  return (
  <>
  <h1> a + b = {a+b}</h1>
  <Friends friends={fre} />
  <Abc gloria={gloria}/>
  <Hello name='hmann' age='59' />
  <Hello name={name} age={age} />
  <Hello name={xyz[0]} age={xyz[1]} />
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
const Friends = ({friends})=>{
let a = friends.map((friend)=><li>{friend.name} {friend.age}</li>)
return (<ul>{a}</ul>)

}