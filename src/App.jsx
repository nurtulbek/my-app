import "./App.css"
import me from "./assets/me.png"
import hackhathon from "./assets/hackhathon.svg"
import pasabahce from "./assets/pasabahce.svg"

import html from "./assets/html.svg"
import css from "./assets/css.svg"
import js from "./assets/js.svg"
import ts from "./assets/ts.svg"
import react from "./assets/react.svg"
import figma from "./assets/figma.svg"
import next from "./assets/next.svg"
import router from "./assets/router.svg"
import flutterFlow from "./assets/flutterFlow.svg"
import git from "./assets/git.svg"
import firebase from "./assets/firebase.svg"
import prompt from "./assets/prompt.svg"


import tg from "./assets/telegram.svg"
import insta from "./assets/instagram.svg"
import gitHub from "./assets/gitHub.svg"


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

        <div className="skill-title">
            <p>Skills</p>
          </div>

        <div className="skills">
          <div className="skill-item">
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <img src={css} alt="" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <img src={js} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img src={ts} alt="" />
            <p>TypeScript</p>
          </div>
          <div className="skill-item">
            <img src={react} alt="" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <img src={figma} alt="" />
            <p>Figma</p>
          </div>
          <div className="skill-item">
            <img src={next} alt="" />
            <p>NextJS</p>
          </div>
          <div className="skill-item">
            <img src={router} alt="" />
            <p>React router</p>
          </div>
          <div className="skill-item">
            <img src={flutterFlow} alt="" />
            <p>FlutterFlow</p>
          </div>
          <div className="skill-item">
            <img src={git} alt="" />
            <p>Git</p>
          </div>
          <div className="skill-item">
            <img src={firebase} alt="" />
            <p>Firebase</p>
          </div>
        </div>

        <div className="what-i-do">
          <p>What I do?</p>
        </div>

        <div className="explanation">
          <div className="explanation-item">
            <div className="title">
              <img src={react} alt="" className="title-img" />
              <p className="title-text">
                Frontend Development 
              </p>
            </div>

            <div className="explanation-main">
                I specialize in building the user-facing side of websites and applications, turning ideas and designs into 
                fully functional, responsive, and visually engaging interfaces. My focus is on creating layouts that adapt
                 seamlessly to any device, whether it is a desktop, tablet, or mobile phone. I pay close attention to performance 
                 optimization so that pages load quickly and interactions feel smooth. With a strong foundation in React and modern frontend 
                 tools, I deliver user experiences that are not only attractive but also intuitive and enjoyable to use.
            </div>
          </div>

          <div className="explanation-item">
            <div className="title">
              <img src={next} alt="" className="title-img" />
              <p className="title-text">
                Backend Development  
              </p>
            </div>

            <div className="explanation-main">
              Behind every great application is a powerful backend, and this is where I create the invisible structure that keeps everything running 
              smoothly. I work on building secure servers, databases, and APIs that handle data efficiently and reliably. My goal is to ensure that applications 
              remain stable under load, protect user information, and process requests quickly. By combining logic, data management, and performance optimization, I make sure that the 
              foundation of each project is strong, scalable, and ready to support both current needs and future growth.
            </div>
          </div>

          <div className="explanation-item">
            <div className="title">
              <img src={figma} alt="" className="title-img" />
              <p className="title-text">
                UX/UI Design 
              </p>
            </div>

            <div className="explanation-main">
              Design is more than just aesthetics; it is about shaping the entire experience a user has when interacting with a product. I create designs in Figma that balance clarity,
              simplicity, and modern style. My approach is to craft layouts that are easy to navigate, visually consistent, and aligned with the goals of the project. Every element, from
              typography to spacing and color, is chosen to improve usability and leave a lasting impression. The end result is a design that not only looks professional but also guides 
              users naturally and makes digital products enjoyable to use.
            </div>
          </div>

          <div className="explanation-item">
            <div className="title">
              <img src={prompt} alt="" className="title-img" />
              <p className="title-text">
                Prompt Engineering
              </p>
            </div>

            <div className="explanation-main">
              In the rapidly evolving world of artificial intelligence, I focus on prompt engineering to unlock the full potential of large language models such as ChatGPT. This involves writing 
              precise and effective prompts that generate high-quality, context-aware responses. I integrate AI into workflows and applications to automate tasks, enhance creativity, and provide
              intelligent solutions to complex problems. By experimenting with different structures and techniques, I ensure that the interaction between humans and AI is efficient, accurate,
              and valuable. Prompt engineering allows me to bring advanced AI capabilities into practical use cases, creating tools that are smarter and more adaptive.
            </div>
          </div>
        </div>

        <div className="contacts">  
          <div className="contacts-title">
            Have <span>questions?</span> <br />
            You can <span>email</span> me at: <br />
            <a href=""> owezresul0@gmail.com </a> <br />
            or
          </div>
          <div className="social-media">
            <img src={tg} alt="" />
            <img src={insta} alt="" />
            <img src={gitHub} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
