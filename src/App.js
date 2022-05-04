import { Typography } from '@mui/material'
import React, { useState } from 'react'
import Buttons from './components/Buttons'
import Form from './components/Form'
import './App.css'

const App = () => {
  const [input, setInput] = useState('')
  return (
    <div className='bg'>
    <center >
      <Typography>Calculator Application</Typography>
      <div>
      <Form input={input} setInput={setInput} />
      <Buttons input={input} setInput={setInput} />
      </div>
    </center>
    </div>
  )
}

export default App
