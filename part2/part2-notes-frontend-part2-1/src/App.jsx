const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <li>{note.content}<strong> : ID = {note.id}</strong> key: {note.key} .... {note.id}</li>)}
      </ul>
    </div>
  )
}
export default App