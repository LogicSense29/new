import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './component/Home'
import Wwa from './component/Wwa';
import Future from './component/Future';
import ILoveYou from './component/ILoveYou';
import Page404 from './component/Page404';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m'>
       <div className='background'></div>
      <BrowserRouter>
      <Routes>
              <Route exact path="/" element={<Home/>}/>
              {/* <Route exact path="/forms/:id" element={<Form/>}/> */}
              <Route path='/wwa' element={<Wwa/>}/>
              <Route path='/future' element={<Future/>}/>
              <Route path='/iloveyou' element={<ILoveYou/>}/>
              <Route path="*" element={<Page404/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
