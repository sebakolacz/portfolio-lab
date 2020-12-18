import React from 'react';
import fb from '../assets/Facebook.png';
import ig from '../assets/Instagram.png';

function Contact() {
  return (
    <div className="contact">
        <div className="contact__image"></div>
        <div className="contact__components">
            <div className="contact__title">Skontaktuj się z nami</div>
            <div className="contact__logo"></div>
            <form className="contact__form">
                <div className="contact__form-data">
                  <div className="contact__form-data-input">Wpisz swoje imię
                    <input className="contact__form-data-name" placeholder="Krzysztof" type="name"></input>
                  </div>
                  <div className="contact__form-data-input">Wpisz swój email
                    <input className="contact__form-data-mail" placeholder="abc@xyz.pl"></input>
                  </div>
                </div>
                <div className="contact__form-text">Wpisz swoją wiadomość
                  <textarea className="contact__form-text-placeholder" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                </div>
            </form>
            <submit className="contact__form-submit">Wyślij</submit>
            <div className="contact__footer">
            <h1 className="contact__footer-text">Copyright by Coders Lab</h1>
            <div className="contact__footer-social">
              <img src={fb}></img>
              <img src={ig}></img>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact;