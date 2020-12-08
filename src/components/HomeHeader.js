import React from 'react';

function HomeHeader() {
  return (
    <div className="home">
      <div className="home__image"></div>
      <div className="home__components">
        <div className="home__login">
          <button className="home__login-btn home__login-btn-sign-in">Zaloguj</button>
          <button className="home__login-btn home__login-btn-sign-up">Załóż konto</button>
        </div>
        <div className="home__menu">
          <ul className="home__menu-list">
            <li className="home__menu-list-item">Start</li>
            <li className="home__menu-list-item">O co chodzi?</li>
            <li className="home__menu-list-item">O nas</li>
            <li className="home__menu-list-item">Fundacja i organizacje</li>
            <li className="home__menu-list-item">Kontakt</li>
          </ul>
        </div>
        <div className="home__main">
          <h1 className="home__main-title">Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h1>
          <div className="home__main-logo"></div>
          <div className="home__main-buttons">
            <button className="home__main-btn">
              <h1 className="home__main-btn-text">ODDAJ<br />RZECZY</h1>
            </button>
            <button className="home__main-btn">
              <h1 className="home__main-btn-text">ZORGANIZUJ ZBIÓRKĘ</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader;
