import React from 'react';
import { Link } from 'react-router-dom';


function Logout() {
  return (
    <>
        <div className="logout">
            <div className="logout__image"></div>
            <div className="logout__components">
                <div className="logout__login">
                <button className="logout__login-btn home__login-btn-sign-in">Zaloguj</button>
                <Link to="rejestracja">
                    <button className="logout__login-btn home__login-btn-sign-up">Załóż konto</button>
                </Link>
                </div>
                <div className="logout__menu">
                    <ul className="logout__menu-list">
                        <li className="logout__menu-list-item">Start</li>
                        <li className="logout__menu-list-item">O co chodzi?</li>
                        <li className="logout__menu-list-item">O nas</li>
                        <li className="logout__menu-list-item">Fundacja i organizacje</li>
                        <li className="logout__menu-list-item">Kontakt</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="logout__main">
            <h1 className="logout__title">Wylogowanie nastąpiło pomyślnie!</h1>
            <div className="logout__logo"></div>
            <Link to="/" className="logout__home">
                <button className="logout__btn"><h1 className="logout__btn-style">Strona główna</h1></button>
            </Link>
        </div>
    </>
  )
}

export default Logout;