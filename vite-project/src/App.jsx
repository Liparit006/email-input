import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import EmailInp from './EmailInp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <EmailInp/>
  )
}

export default App
