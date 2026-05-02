import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:countryIndex'element={<Detail/>}/>

      </Routes>
   </BrowserRouter>
  )
}

export default App
