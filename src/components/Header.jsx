import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Header({ text, bgColor, textColor }) {
  const headerStyle = {
      backgroundColor: bgColor,
      color: textColor,
  } 


  return (
    <header style={headerStyle}>
      <div className='container'>
          <Link to='/' style={{ textDecoration: 'none', color: '#ff6a95' }}><h2>{text}</h2></Link>
      </div>
    </header>
  )
}


Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes = {
    text: propTypes.string,
    bgColor: propTypes.string,
    textColor: propTypes.string
}
