import React from 'react';

function Login() {
  return (
      <>
    <div className="register">
        <div className="register__image"></div>
        <div className="register__components">
            <div className="register__register">
            <button className="register__register-btn home__register-btn-sign-in">Zaloguj</button>
            <button className="register__register-btn home__register-btn-sign-up">Załóż konto</button>
            </div>
            <div className="register__menu">
                <ul className="register__menu-list">
                    <li className="register__menu-list-item">Start</li>
                    <li className="register__menu-list-item">O co chodzi?</li>
                    <li className="register__menu-list-item">O nas</li>
                    <li className="register__menu-list-item">Fundacja i organizacje</li>
                    <li className="register__menu-list-item">Kontakt</li>
                </ul>
            </div>
        </div>
    </div>
    <h1 className="register__title">Załóż konto</h1>
    <div className="register__logo"></div>
    <div className="register__data">
        <input type="text" className="register__data-input-mail" placeholder="Email"></input>
        <input type="password" className="register__data-input-passwd" placeholder="Hasło"></input>
        <input type="password" className="register__data-input-passwd-again" placeholder="Powtórz hasło"></input>
    </div>
    <div className="register__buttons">
        <button className="register__btn"><h1 className="register__btn-style">Załóż konto</h1></button>
        <button className="register__btn"><h1 className="register__btn-style">Zaloguj się</h1></button>
    </div>
    </>
  )
}

export default Login;