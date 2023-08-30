import React from 'react'

function Heading() {
  return (
    <div>
      <div className="heading">
      <div className='heading-main'>
              <span className='heading-line1'>Unlimited movies, TV shows and more</span><br />
              <span className='heading-line2'>Watch anywhere. Cancel anytime. </span><br />
              <span className='heading-line3'>Ready to watch? Enter your email to create or restart your membership.</span><br />
              </div>
              
              <div className='heading-line4'>
              <input className='heading-input'   type="text" placeholder='Email adress' />
              <button className='heading-btn'>Get Started  &#8250;</button>
              </div>
      </div>
      <div className="heading-line5"></div>
    </div>
  )
}

export default Heading
