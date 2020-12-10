import React from 'react';

function WhoWeAre() {
  return (
    <div className="whoweare">
        <h1 className="whoweare__title">Komu pomagamy?</h1>
        <div className="whoweare__logo"></div>
        <div className="whoweare__components-title">
            <div className="whoweare__component">Fundacjom</div>
            <div className="whoweare__component">Organizacjom<br /> pozarządowym</div>
            <div className="whoweare__component">Lokalnym<br /> zbiórkom</div>
        </div>
        <p className="whoweare__paragraph">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
        <div className="whoweare__components-info">
            <div className="whoweare__component-info">
                <div className="whoweare__component-info-left">
                    <h1 className="whoweare__component-info-left-title">Fundacja “Dbam o Zdrowie”</h1>
                    <h1 className="whoweare__component-info-left-text">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h1>
                </div>
                <div className="whoweare__component-info-right">ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
            </div>
            <div className="whoweare__component-info">
                <div className="whoweare__component-info-left">
                    <h1 className="whoweare__component-info-left-title">Fundacja “Dla dzieci”</h1>
                    <h1 className="whoweare__component-info-left-text">Cel i misja: Pomoc dzieciom z ubogich rodzin.</h1>
                </div>
                <div className="whoweare__component-info-right">ubrania, meble, zabawki</div>
            </div>
            <div className="whoweare__component-info">
                <div className="whoweare__component-info-left">
                    <h1 className="whoweare__component-info-left-title">Fundacja “Bez domu”</h1>
                    <h1 className="whoweare__component-info-left-text">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</h1>
                </div>
                <div className="whoweare__component-info-right">ubrania, jedzenie, ciepłe koce</div>
            </div>
        </div>
        <div className="whoweare__buttons">
            <button className="whoweare__btn">1</button>
            <button className="whoweare__btn">2</button>
            <button className="whoweare__btn">3</button>
        </div>
    </div>
  )
}

export default WhoWeAre;