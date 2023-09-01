import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'

function Footer1() {
  return (
    <>
    <div className="footer1">
        <div className="footer1-container">
          <div className="footer1-heading">
           "Question? Call "
           <a href="">
           000-800-919-1694
           </a>
          </div>

          <div className="footer1-list">
            <div className="footer1-list-name">
              <ul>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'
                  >
                    FAQ</a>
                </li>
                <li className="footer1-listed-name">
                  <a href="/"
                  className='footer1-a'
                  >Help Centre</a>
                </li>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'>
                    Account</a>
                </li>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'>
                    Media Centre</a>
                </li>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'>
                    Investor Relations</a>
                </li>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'>
                    Jobs</a>
                </li>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'>
                    Ways to Watch</a>
                </li>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'>
                    Terms of Use</a>
                </li>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'>
                    Privacy</a>
                </li>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'>
                    Cookie Preferences</a>
                </li>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'>
                    Corporate Information</a>
                </li>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'>
                    Contact Us</a>
                </li>
                <li className="footer1-listed-name">
                  <a href=""
                  className='footer1-a'>
                    Speed Test</a>
                </li>
                <li className="footer1-listed-name">
                  <a href="" 
                  className='footer1-a'>
                    Legal Notices</a>
                </li>
                <li className="footer1-listed-name">
                  <a href="" 
                  className='footer1-a'>
                    Only on Netflix</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-option">
                    <div className="custom-select">
                        <AiOutlineGlobal />
                        <select className="language" name="language" id="languageselect">
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                        </select>
                    </div>
                </div>
                <p>
          Netflix India
        </p>
        </div>
    </div>
      
    </>
  )
}

export default Footer1
