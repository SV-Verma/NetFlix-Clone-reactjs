import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="footer-main">
            <h2>Frequently Asked Question</h2>
            <div className="footer-list">
              <ul className='footer-listed'>
                <li className="footer-list-name">
                  <h3>
                  <span>What is NetFlix?</span>
                    <button>
                          +
                    </button>
                  </h3>
                  </li>
                <li className="footer-list-name">
                <h3>
                  <span>How much dose Netflix cost?</span>
                    <button>
                          +
                    </button>
                  </h3>
                </li>
                <li className="footer-list-name">
                <h3>
                  <span>Where can I watch?</span>
                    <button>
                          +
                    </button>
                  </h3>
                </li>
                <li className="footer-list-name">
                <h3>
                  <span>How do I cencel?</span>
                    <button>
                          +
                    </button>
                  </h3>
                </li>
                <li className="footer-list-name">
                <h3>
                  <span>What can I watch on Netflix?</span>
                    <button>
                          +
                    </button>
                  </h3>
                </li>
                <li className="footer-list-name">
                <h3>
                  <span>Is Netflix good for Kids?</span>
                    <button>
                          +
                    </button>
                  </h3>
                </li>
              </ul>
              <div className="footer-form">
                <div className="footer-heading">
                  <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                </div>
                      <div className="footer-input">
                      <input className='footer-inpt'   type="text" placeholder='Email adress' />
                      <button className='footer-btn'>Get Started  &#8250;</button>
                      </div>
              </div>

            </div>
        </div>
        <div className="footer-line"></div>
    </div>
      
    </>
  )
}

export default Footer
