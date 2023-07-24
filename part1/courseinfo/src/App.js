const Header = (props) => {
  console.log('header',props)
  return (
    <>
      <h1>{props.coux}</h1>
    </>
  );
};

const Part = (props) => {
  console.log('part',props)
  return (
    <>
     
       <h2> {props.part} {props.exercises}</h2>
     
    </>
  )
}

const Content = (props) => {
  console.log('content',props)
  return (
    <>
    <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
    <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
    <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </>
  );
};

const Total = (props) => {
  console.log('total',props)
  return (
    <>
      <p>Number of exercises <strong>{props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</strong></p>
    </>
  );
};
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header coux={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;