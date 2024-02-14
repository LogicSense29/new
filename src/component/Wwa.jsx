import React from 'react'
import {Link} from "react-router-dom"
import { FaHandHoldingHeart } from "react-icons/fa";
import second from "../assets/images/second.jpeg"

export default function Wwa() {
  return (
    <div className='root'>
    <div className='card wwa'>
            <div className='card-item one'>
                <img src={second} alt="Valentine -Freakly Special"/>
            </div>
            <div className='card-item two'>
            <div className='content'>
                    <h2>
                        WHERE WE ARE
                    </h2>
                    <FaHandHoldingHeart className='icon'/>
                    </div>
                <p>
                As our journey unfolds, I find myself falling even more deeply in love with you. You are not just a part of me, but an essential thread woven into the very fabric of my being. With your presence, my world is infused with vibrant colors and endless laughter, making each moment with you an exquisite masterpiece of joy and passion.
                </p>
            </div>
    </div>
    <div className='b ww'>
        <Link to="/" className='link'>PREVIOUS</Link>
        <Link to="/future" className='link'>NEXT</Link>
    </div>
</div>
  )
}
