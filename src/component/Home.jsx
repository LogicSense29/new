import React from 'react'
import {Link} from "react-router-dom"
import { FaHandHoldingHeart } from "react-icons/fa";
import first from "../assets/images/first.jpeg"

export default function Home() {
  return (
    <div className='root'>
        <div className='card'>
                <div className='card-item one'>
                    <img src={first} alt="Valentine -Freakly Special"/>
                </div>
                <div className='card-item two'>
                    <div className='content'>
                    <h2>
                        THE TALKING STAGE
                    </h2>
                    <FaHandHoldingHeart className='icon'/>
                    </div>
                    <p>
                    In the beginning, I had doubts about our future together, but as I got to know you more, I found peace and realized you were the one for me.
                    </p>
                </div>
        </div>
        <div className='b'>
            <Link to="/wwa" className='link' >NEXT</Link>
        </div>
    </div>
  )
}
