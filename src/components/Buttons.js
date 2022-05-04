import React from 'react'
import {Button} from '@mui/material'

const Buttons = ({setInput, input}) => {

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
        try{
            setInput(eval(input).toString())
        }
        catch(err){
            setInput("Error")
        }
    }

  return (
    <div className='keyboard'>
        
        <div className='response'>
      <Button variant="contained" margin="15px"  onClick={onClickClear} id="clear" type='button'>Clear</Button>
      <Button  variant="contained"  type='button'>H</Button>
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
  )
}

export default Buttons
