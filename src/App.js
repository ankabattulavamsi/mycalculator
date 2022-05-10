import Calculator from './components/Calculator'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import History from './components/History'

const App = () => {
  
  return (
    <div className='bg'>
   <center >
     <BrowserRouter>
     <Routes>
       <Route exact path='/' element={<Calculator />} />
       <Route exact path='/history' element={<History />} />
     </Routes>
     </BrowserRouter>
    </center>
    </div>
  )
}

export default App
