import React from 'react'

function OfflineRow() {
  return (
    <>

      <div className="OfflineRow">
        <div className="OfflineRow-main">
          <div className="OfflineRow-left">
            <div className="OfflineRow-image">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                className='OfflineRow-img'
                alt="" />

              <div className="OfflineRow-motion">
                <div className="OfflineRow-motion-img">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                    className='OfflineRow-motion-img-img'
                    alt="" />
                </div>

                <div className="OfflineRow-img-heading">
                  <div className='OfflineRow-img-heading1'>Stranger Things</div>
                  <div className='OfflineRow-img-heading2'>Downloading.....</div>
                </div>
                <div className="OfflineRow-loading-icon">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                    className='OfflineRow-icon'
                    alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="OfflineRow-right">
            <h2>
              Download your shows to watch offline
            </h2>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
        <div className="OfflineRow-line"></div>
      </div>

    </>
  )
}

export default OfflineRow;
