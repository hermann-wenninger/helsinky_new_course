const Hello = (props) => {
  console.log('fuck the army', props);
  return (
    <div>
      <p>hello world and hello to the universe from{props.name}  with {props.agf}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  let x = 999999
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ];
  let api = ['1','2','3']
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="arni" agf="34567"/>
      <Hello name="hmann" agf={age}/>
      <Hello name="flix" agf={456 + 123}/>
      <Hello name={name} agf={x}/>
      <Hello name={friends[0].name} agf={friends[0].age}/>
      <Hello name={friends[1].name} agf={friends[1].age}/>
      <Hello name={api[0]} agf={api}/>
    </>
  )
}

export default App