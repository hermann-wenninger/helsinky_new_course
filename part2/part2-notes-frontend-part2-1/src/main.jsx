import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
    key:7893332
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false,
    key:34567890
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true,
    key:12345678
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)