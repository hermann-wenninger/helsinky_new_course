import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
console.log('parts[0]',parts[0])
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}
export default App



const Header = ({ course }) => (
  <h1 className='root'>{course}</h1>
)

const Part = ({ part }) => (
  <p><strong>Parts:</strong>{part.name} <strong>exercises:</strong>{part.exercises}</p>
)

const Content = ({ part1, part2, part3 }) => (
  <div className='root'>
    <Part part={part1.name} exercises={part1.exercises} />

    <Part part={part2.name} exercises={part2.exercises} />

    <Part part={part3.name} exercises={part3.exercises} />
  </div>
)

const Total = ({ part1, part2, part3 }) => (
  <p className='root'>
    <strong>Exerices:</strong> {part1.exercises + part2.exercises + part3.exercises}
  </p>
)




