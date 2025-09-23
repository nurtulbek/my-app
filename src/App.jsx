import "./App.css"
import me from "./assets/me.png"
function App() {

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>NURTULBEK</h1>
          <button>ENG</button>
        </div>
        <div className="me">
          <div className="gallery">
            <div className="gallery-item">
              <img src={me} alt="gallery" />
              <div className="platform">
              </div>
            </div>

            <div className="about">
              <p>
                Frontend Developer &
                UI/UX Enthusiast
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
