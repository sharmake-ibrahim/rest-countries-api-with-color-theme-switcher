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
import Oceania from './pages/Oceania';
import OceaniaDetail from './pages/OceaniaDetail';
import Header from './pages/Header';
import { useTheme } from './hooks/UseTheme';

function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <BrowserRouter>
    <div className="min-h-screen bg-stone-50  dark:bg-slate-800 text-slate-800 dark:text-white duration-300">

    
     <Header theme={theme} onToggle={toggleTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:countryIndex' element={<Detail />} />
        <Route path='/africa' element={<Africa />} />
        <Route path='/africa/:common' element={<AfricaDetail />} />
        <Route path='/america' element={<America />} />
        <Route path='/america/:common' element={<AmericaDetail />} />
        <Route path='/asia' element={<Asia />} />
        <Route path='/asia/:common' element={<AsiaDetail />} />
        <Route path='/europe' element={<Europe />} />
        <Route path='/europe/:common' element={<EuropeDetail />} />
        <Route path='/oceania' element={<Oceania />} />
        <Route path='/oceania/:common' element={<OceaniaDetail />} />


      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
