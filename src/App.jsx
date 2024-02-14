import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './component/Home'
import Wwa from './component/Wwa';
import Future from './component/Future';
import ILoveYou from './component/ILoveYou';
import Page404 from './component/Page404';

var width = window.innerWidth;
var height = window.innerHeight;


function App() {
  const [size, setSize] = useState(false);
  const baseWidth = 480;
  const baseHeight = 900;

  useEffect(()=> {
    if(width <= baseWidth && height <= baseHeight){
      setSize(true);
      console.log("changed to true", width,height)
    } else{
      setSize(false)
      console.log("changed to false", width,height)
    }
}, [width,height])

  return (
    <>
    {size ? (
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
    ): (
      <h1>This Can not be Viewed on Tablet and Laptop</h1>
    )}
    </>
  )
}

export default App
