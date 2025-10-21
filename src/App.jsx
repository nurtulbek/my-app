import "./App.css"
import MeSlider from "./Slider.jsx"
import LanguageSwitcher from "./components/LanguageSwitcher.jsx"
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>{t('header.name')}</h1>
          <LanguageSwitcher />
        </div>

        
        <div className="me">
          <MeSlider/>
          
          <div className="platform">
          </div>

          <div className="about">
            <p className="about-title">
              {t('about.title')}
            </p>

            <p className="about-text">
              {t('about.text')}
            </p>

            <button className="about-button">
              <a href="mailto:owezresul0@gmail.com?body=My custom mail body">
                {t('about.button')}
              </a>
            </button>
          </div>
        </div>

        <div className="works">
            <p className="works-title">Works</p>
            <div className="project-item">
              <a href="https://nasa-space-app-blush.vercel.app/">
                <img src={hackhathon} alt="Hackathon project" />
                <p dangerouslySetInnerHTML={{ __html: t('works.hackathon') }}></p>
              </a>
            </div>
            <div className="project-item">
              <a href="https://pasabahce.netlify.app/">
                <img src={pasabahce} alt="Pasabahce project" />
                <p dangerouslySetInnerHTML={{ __html: t('works.pasabahce') }}></p>
              </a>
            </div>
        </div>

        <div className="skill-title">
            <p>{t('skills.title')}</p>
          </div>

        <div className="skills">
          <div className="skill-item">
            <img src={html} alt="HTML icon" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <img src={css} alt="CSS icon" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <img src={js} alt="JavaScript icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img src={ts} alt="TypeScript icon" />
            <p>TypeScript</p>
          </div>
          <div className="skill-item">
            <img src={react} alt="React icon" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <img src={figma} alt="Figma icon" />
            <p>Figma</p>
          </div>
          <div className="skill-item">
            <img src={next} alt="NextJS icon" />
            <p>NextJS</p>
          </div>
          <div className="skill-item">
            <img src={router} alt="React Router icon" />
            <p>React router</p>
          </div>
          <div className="skill-item">
            <img src={flutterFlow} alt="FlutterFlow icon" />
            <p>FlutterFlow</p>
          </div>
          <div className="skill-item">
            <img src={git} alt="Git icon" />
            <p>Git</p>
          </div>
          <div className="skill-item">
            <img src={firebase} alt="Firebase icon" />
            <p>Firebase</p>
          </div>
        </div>

        <div className="what-i-do">
          <p>{t('whatIdo.title')}</p>
        </div>

        <div className="explanation">
          <div className="explanation-item">
            <div className="title">
              <img src={react} alt="React icon" className="title-img" />
              <p className="title-text">
                {t('frontend.title')}
              </p>
            </div>

            <div className="explanation-main">
                {t('frontend.text')}
            </div>
          </div>

          <div className="explanation-item">
            <div className="title">
              <img src={next} alt="NextJS icon" className="title-img" />
              <p className="title-text">
                {t('backend.title')}
              </p>
            </div>

            <div className="explanation-main">
              {t('backend.text')}
            </div>
          </div>

          <div className="explanation-item">
            <div className="title">
              <img src={figma} alt="Figma icon" className="title-img" />
              <p className="title-text">
                {t('design.title')}
              </p>
            </div>

            <div className="explanation-main">
              {t('design.text')}
            </div>
          </div>

          <div className="explanation-item">
            <div className="title">
              <img src={prompt} alt="Prompt Engineering icon" className="title-img" />
              <p className="title-text">
                {t('prompt.title')}
              </p>
            </div>

            <div className="explanation-main">
              {t('prompt.text')}
            </div>
          </div>
        </div>

        <div className="contacts">  
          <div className="contacts-title" 
               dangerouslySetInnerHTML={{ __html: t('contacts.title') }}>
          </div>
          <div className="social-media">
            <a href="https://t.me/nurtulbek"><img src={tg} alt="Telegram" /></a>
            <a href="https://www.instagram.com/nurtulbek?igsh=MXU5ZW5weDhqNmpzZw=="><img src={insta} alt="Instagram" /></a>
            <a href="https://github.com/nurtulbek"><img src={gitHub} alt="GitHub" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
