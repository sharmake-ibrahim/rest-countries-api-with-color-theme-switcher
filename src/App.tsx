import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Africa from './pages/Africa';
import AfricaDetail from './pages/AfricaDetail';
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:countryIndex'element={<Detail/>}/>
         <Route path='/africa' element={<Africa />} />
<Route path='/africa/:common' element={<AfricaDetail />} />

      </Routes>
   </BrowserRouter>
  )
}

export default App
