import React from 'react';

function SimpleSteps() {
  return (
    <div className="simplesteps">
        <div className="simplesteps__title">Wystarczą 4 proste kroki</div>
        <div className="simplesteps__logo"></div>
        <div className="simplesteps__components">
            <div className="simplesteps__component">
                <div className="simplesteps__component-logo-wear"></div>
                <h1 className="simplesteps__component-title">Wybierz rzeczy</h1>
                <div className="simplesteps__component-line"></div>
                <h1 className="simplesteps__component-text">ubrania, zabawki,<br /> sprzęt i inne</h1>
            </div>
            <div className="simplesteps__component">
                <div className="simplesteps__component-logo-shop"></div>
                <h1 className="simplesteps__component-title">Spakuj je</h1>
                <div className="simplesteps__component-line"></div>
                <h1 className="simplesteps__component-text">skorzystaj z<br /> worków na śmieci</h1>
            </div>
            <div className="simplesteps__component">
                <div className="simplesteps__component-logo-search"></div>
                <h1 className="simplesteps__component-title">Zdecyduj komu chcesz pomóc</h1>
                <div className="simplesteps__component-line"></div>
                <h1 className="simplesteps__component-text">wybierz zaufane miejsce</h1>
            </div>
            <div className="simplesteps__component">
                <div className="simplesteps__component-logo-replay"></div>
                <h1 className="simplesteps__component-title">Zamów kuriera</h1>
                <div className="simplesteps__component-line"></div>
                <h1 className="simplesteps__component-text">kurier przyjedzie<br /> w dogodnym terminie</h1>
            </div>
        </div>
        <button className="simplesteps__btn">
            <p className="simplesteps__btn-text">ODDAJ<br />RZECZY</p>
        </button>
    </div>
  )
}

export default SimpleSteps;
