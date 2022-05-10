import React, { useState } from 'react'
import {Button} from '@mui/material'
import Form from './Form'
import { useNavigate } from 'react-router'

const Calculator = () => {
    const [input, setInput] = useState('')
    const [showResult, setShowResult] = useState(false)

    const calHistory = () => {
        setShowResult(!showResult)
    }
    
    const onClickButton = e => {
        setInput(input.concat(e.target.name))
    }

    const onClickBack = e => {
        setInput(input.slice(0, input.length -1))
    }

    const onClickClear = e => {
        setInput("")
    }

    const onClickResult = () => {
        const firstInput = input
        let output;
        try{
           output = eval(input).toString()
           setInput(output)
        }
        catch(err){
            setInput("Error")
        }

        const historyResult = JSON.parse(localStorage.getItem("calHistory")) || [];
        historyResult.push(`${firstInput} = ${output}`)
        localStorage.setItem('calHistory', JSON.stringify(historyResult))
        setInput('')
    }

    let navigate = useNavigate()
    const onClickHistoryResult = () => {
        navigate({
            pathname: `/history`
        })
    }


    

  return (
      <div>
      <Form input={input} setInput={setInput} />
    <div className='keyboard'>
        
        <div className='response'>
      <Button variant="contained" margin="15px"  onClick={onClickClear} id="clear" type='button'>Clear</Button>
      <Button  variant="contained" type='button' onClick={onClickHistoryResult}>H</Button>
      <Button variant="contained" onClick={onClickBack} type='button'>C</Button>
      <Button variant="contained" name="*" onClick={onClickButton} type='button'>*</Button>
      <br />
      </div>

      <div className='response'>
      <Button variant="outlined" name='7' onClick={onClickButton} type='button'>7</Button>
      <Button variant="outlined" name='8' onClick={onClickButton} type='button'>8</Button>
      <Button variant="outlined" name='9' onClick={onClickButton} type='button'>9</Button>
      <Button variant="contained" name="%" onClick={onClickButton} type='button'>%</Button><br />
      </div>


      <div className='response'>
      <Button variant="outlined" name='4' onClick={onClickButton} type='button'>4</Button>
      <Button variant="outlined" name='5' onClick={onClickButton} type='button'>5</Button>
      <Button variant="outlined" name='6' onClick={onClickButton} type='button'>6</Button>
      <Button variant="contained" name='+' onClick={onClickButton} type='button'>+</Button> <br />
      </div>

      <div className='response'> 
      <Button variant="outlined" name='1' onClick={onClickButton} type='button'>1</Button>
      <Button variant="outlined" name='2' onClick={onClickButton} type='button'>2</Button>
      <Button variant="outlined" name='3' onClick={onClickButton} type='button'>3</Button>
      <Button variant="contained" name='-' onClick={onClickButton} type='button'>-</Button><br />
      </div>

      <div className='response'>
      <Button variant="outlined" name='0' onClick={onClickButton} type='button'>0</Button>
      <Button variant="outlined" name='.' onClick={onClickButton} type='button'>.</Button> 
      <Button variant="contained"  id="large" onClick={onClickResult} type='button'>Result</Button>
      </div>
      </div>
      </div>
  )
}


export default Calculator
