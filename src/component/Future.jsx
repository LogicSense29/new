import React from 'react'
import {Link} from "react-router-dom"
import { FaHandHoldingHeart } from "react-icons/fa";
import third from "../assets/images/third.jpeg"

export default function Future() {
  return (
    <div className='root'>
    <div className='card future'>
            <div className='card-item one'>
                <img src={third} alt="Valentine -Freakly Special"/>
            </div>
            <div className='card-item two'>
            <div className='content'>
                    <h2>
                        THE FUTURE
                    </h2>
                    <FaHandHoldingHeart className='icon'/>
                    </div>
                <p>
                I am filled with an overwhelming sense of anticipation for the incredible future that awaits us. My deepest desire is to intertwine our hands together, forging a bond that transcends time and space. Darling, my love for you burns brighter with each passing moment, igniting a flame that I pray will never fade.
                </p>
            </div>
    </div>
    <div className='b fu'>
        <Link to="/home" >PREVIOUS</Link>
        <Link to="/iloveyou" >NEXT</Link>
    </div>
</div>
  )
}
