const Hello = () => {
  console.log('fuck the army');
  return (
    <div>
      <p>hello world and hello to the universe</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App