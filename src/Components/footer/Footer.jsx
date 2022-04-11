import React from 'react'
import "./footer.css"
import Right from './Right'
import Left from './Left'

const Footer = () => {
  return (
    <section id="footer">
    <div className='container'>
    <div className='col'>
      <div className='leftside'>
     
      <Left />
      </div>
      <div className='col'>
        <div className='rightside'>
          <Right />
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Footer