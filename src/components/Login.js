import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
  return (
      <>
    <div className="login">
        <div className="login__image"></div>
        <div className="login__components">
            <div className="login__login">
            <button className="login__login-btn home__login-btn-sign-in">Zaloguj</button>
            <Link to="rejestracja">
                <button className="login__login-btn home__login-btn-sign-up">Załóż konto</button>
            </Link>
            </div>
            <div className="login__menu">
                <ul className="login__menu-list">
                    <li className="login__menu-list-item">Start</li>
                    <li className="login__menu-list-item">O co chodzi?</li>
                    <li className="login__menu-list-item">O nas</li>
                    <li className="login__menu-list-item">Fundacja i organizacje</li>
                    <li className="login__menu-list-item">Kontakt</li>
                </ul>
            </div>
        </div>
    </div>
    <h1 className="login__title">Zaloguj się</h1>
    <div className="login__logo"></div>
    <div className="login__data">
        <input type="text" className="login__data-input-mail" placeholder="Email"></input>
        <input type="password" className="login__data-input-passwd" placeholder="Hasło"></input>
    </div>
    <div className="login__buttons">
        <Link to="rejestracja">
            <button className="login__btn"><h1 className="login__btn-style">Załóż konto</h1></button>
        </Link>
        <button className="login__btn"><h1 className="login__btn-style">Zaloguj się</h1></button>
    </div>
    </>
  )
}

export default Login;