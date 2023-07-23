const Hello = (props) => {
  console.log('fuck the army');
  return (
    <div>
      <p>hello world and hello to the universe from{props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="arni"/>
      <Hello name="hmann"/>
      <Hello name="flix"/>
      <Hello name="calaa"/>
    </div>
  )
}

export default App