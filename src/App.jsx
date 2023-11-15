import react, { useState } from 'react';
import Form from './Form.jsx';
import Ideas from './Ideas.jsx';
import './App.css'


// React components ALWAYS NEED TO RETURN A VALUE
function App() {
  const [allIdeas, setAllIdeas] = useState([
    'Sweaters for pugs',
    'Hats for cats',
    'Sleeping bags for parakeets',
    'Little vests for lizards'
  ])
  
  return (
    <>
      <h1>Great Ideas</h1>
      <Form />
      <Ideas allIdeas={allIdeas} />
    </>
  )
}

export default App
