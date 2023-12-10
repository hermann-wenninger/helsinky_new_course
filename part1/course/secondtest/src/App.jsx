const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Header course={course}/>
  <Content part={part1} exercises={exercises1}/>
  <Content part={part2} exercises={exercises2}/>
  <Content part={part3} exercises={exercises3}/>
  <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
 </div>
 )
}

export default App


const Header = (props)=>{
  console.log(props)
return(
   <h1>{props.course}</h1>)
   
 
}
const Content = (props)=>{
  console.log(props)
  return(
    <ul>
      <li><strong>Part:</strong> {props.part} <strong>Exercises:</strong>{props.exercises}</li>
    </ul>
  )
}
const Total =(props)=>{
  return(
    <p>All Exes: {props.ex1 + props.ex2 + props.ex3}</p>
  )
}