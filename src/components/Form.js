import React from 'react'

const Form = ({input, setInput}) => {
    const onChangeInput = e => {
        setInput(e.target.value)
    }
  return (
    <form>
      <input value={input} type="text" className='input' onChange={onChangeInput} />
    </form>
  )
}

export default Form
