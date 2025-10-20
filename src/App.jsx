import "./App.css"
import me from "./assets/me.png"
import hackhathon from "./assets/hackhathon.svg"
import pasabahce from "./assets/pasabahce.svg"
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
          </div>
          <div className="about">
            <p className="about-title">
              Frontend Developer &
               UI/UX Enthusiast
            </p>

            <p className="about-text">
              I build responsive, fast, and modern websites with clean design. 
              Skilled in React, Figma, and FlutterFlow with  backend knowledge 
              to deliver complete solutions.
            </p>

            <button className="about-button">Let's work otgether</button>
          </div>
        </div>

        <div className="works">
            <div className="project-item">
              <img src={hackhathon} alt="" />
            </div>
            <div className="project-item">
              <img src={pasabahce} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default App
