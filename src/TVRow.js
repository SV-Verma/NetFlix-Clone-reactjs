
function TVRow() {


  return (
    <>
      <div className="tvrow">
        <div className="tvrow-main">
          <div className="tvrow-left">
            <h2>
              Enjoy on your TV
            </h2>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </p>
          </div>

          <div className="tvrow-right">
            <div className="tvrow-img">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="vedio-background"
                className='tvrow-right-img' />
              <div className="tvrow-vdo">
                <video autoPlay playsInline muted loop>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                    type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

        </div>
        <div className="tvrow-line"></div>
      </div>

    </>
  )
}

export default TVRow
