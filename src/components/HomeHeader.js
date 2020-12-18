import React from 'react';
import { Link as Link1 } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';


function HomeHeader() {
  return (
    <div className="home">
      <div className="home__image"></div>
      <div className="home__components">
          <ul className="home__login">
            <Link1 to="logowanie">
              <button className="home__login-btn home__login-btn-sign-in">Zaloguj</button>
            </Link1>
            <Link1 to="rejestracja">
              <button className="home__login-btn home__login-btn-sign-up">Załóż konto</button>
            </Link1>
          </ul>
        <div className="home__menu">
          <ul className="home__menu-list">
            <li className="home__menu-list-item">Start</li>
            <Link2 to="simplesteps" smooth={true} duration={1000}><li className="home__menu-list-item">O co chodzi?</li></Link2>
            <Link2 to="aboutus" smooth={true} duration={1000}><li className="home__menu-list-item">O nas</li></Link2>
            <Link2 to="whoweare" smooth={true} duration={1000}><li className="home__menu-list-item">Fundacja i organizacje</li></Link2>
            <Link2 to="contact" smooth={true} duration={1000}><li className="home__menu-list-item">Kontakt</li></Link2>
          </ul>
        </div>
        <div className="home__main">
          <h1 className="home__main-title">Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h1>
          <div className="home__main-logo"></div>
          <div className="home__main-buttons">
            <Link1 to="logowanie">
              <button className="home__main-btn">
                <h1 className="home__main-btn-text">ODDAJ<br />RZECZY</h1>
              </button>
            </Link1>
            <Link1 to="logowanie">
              <button className="home__main-btn">
                <h1 className="home__main-btn-text">ZORGANIZUJ ZBIÓRKĘ</h1>
              </button>
            </Link1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader;
