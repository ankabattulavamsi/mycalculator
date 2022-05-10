import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const History = ({calHistory}) => {
  const [clearHistory, setClearHistory] = useState(false)

  const onClickClearHistory = () => {
    localStorage.clear()
    setClearHistory(true)
  }

  const navigate = useNavigate()
    const onClickHandle = () => {
        navigate({
            pathname: `/`
        })
    }

  let historyResult = JSON.parse(localStorage.getItem("calHistory"))
  return (
    <div>
      {historyResult && !clearHistory ? historyResult.map(item => <li className='history' key={item.id}><p className='items'>{item}</p></li>) : <p className='caption'>No History Here... </p> }
      <button onClick={onClickClearHistory} className="cl-button">Clear History</button>
      <button onClick={onClickHandle} className="black-button">Back</button>
    </div>
  )
}

export default History
