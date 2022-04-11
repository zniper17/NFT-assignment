import React from 'react'
import "./faq.css"
import Right from './Right'

const Faq = () => {
  return (
    <section id="faq">
    <div className='faq-container'>
      <div className='leftFaq'>
      <h2>We will try to help you if you are confused.</h2>
    
      <p>A fequently asked question (FAQ) forum is often used in articles, websites, email lists, and online forums where common questions tend to recur.</p>
      </div>
      <div className='rightFaq'>
      <Right />
      </div>
    </div>
    </section>
  )
}

export default Faq