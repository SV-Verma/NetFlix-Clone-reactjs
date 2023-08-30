import React from 'react'

function OnlineRow() {
  return (
    <>
      <div className="onlinerow">
        <div className="onlinerow-main">
          <div className="onlinerow-left">
            <h2>Watch everywhere</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>


          <div className="onlinerow-right">
            <div className="onlinerow-right-image">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                className='onlinerow-right-img'
                alt="" />
              <div className="onlinerow-right-vdo">
                <video  autoPlay playsInline muted loop>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="onlinerow-line"></div>
      </div>

    </>
  )
}

export default OnlineRow
