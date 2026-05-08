import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Africa from './pages/Africa';
import AfricaDetail from './pages/AfricaDetail';
import America from './pages/America';
import AmericaDetail from './pages/AmericaDetail';
import Asia from './pages/Asia';
import AsiaDetail from './pages/AsiaDetail';
import Europe from './pages/Europe';
import EuropeDetail from './pages/EuropeDetail';

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
         <Route path='/asia' element={<Asia />} />
        <Route path='/asia/:common' element={<AsiaDetail />} />
         <Route path='/europe' element={<Europe />} />
        <Route path='/europe/:common' element={<EuropeDetail />} />


      </Routes>
   </BrowserRouter>
  )
}

export default App
