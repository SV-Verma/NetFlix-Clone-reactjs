import React from 'react'
import { AiOutlineGlobal } from 'react-icons/ai'
import Banner from './Banner'
function Header() {
    return (
        <>
        <Banner />
        <div className='header'>
         <div className="header-main">
            <div className='header-img'>
                <img className='header-logo'
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    alt="nerflix-logo" />
    
            </div>
            <div className="header-container">

                <div className="header-option">
                    <div className="custom-select">
                        <AiOutlineGlobal />
                        <select className="language" name="language" id="languageselect">
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                        </select>
                    </div>
                </div>
                <div className="header-btn">
                    <button className='btn'>Sign In</button>
                </div>
            </div>
            
            </div>
        </div>
        </>
    )
}

export default Header
