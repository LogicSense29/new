import React from 'react'
import {Link} from "react-router-dom"

export default function ILoveYou() {
  return (
    <div className='root'>
        <div className='card love'>
          <h2><h2 className='di'>I LOVE YOU  ADE</h2> from the Depth of my heart</h2>
        </div>
      <div className='b'>
            <Link to="/future" className='link' >PREVIOUS</Link>
        </div>
    </div>
  )
}
