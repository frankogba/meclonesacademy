import React from 'react'
import {Link} from 'react-router-dom';


 function Button() {
  return (
    <Link to="/login">
      <button className='btn'>Portal login</button>
    </Link>
    
  )
}

export default Button;
