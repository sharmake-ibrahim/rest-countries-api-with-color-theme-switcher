import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Africa from './pages/Africa';
import AfricaDetail from './pages/AfricaDetail';
import America from './pages/America';
import AmericaDetail from './pages/AmericaDetail';

function App() {


  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:countryIndex'element={<Detail/>}/>
         <Route path='/africa' element={<Africa />} />
        <Route path='/africa/:common' element={<AfricaDetail />} />
         <Route path='/america' element={<America />} />
        <Route path='/america/:common' element={<AmericaDetail />} />


      </Routes>
   </BrowserRouter>
  )
}

export default App
