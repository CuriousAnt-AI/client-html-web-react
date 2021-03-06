import React from 'react';
import './navigation.styles.scss';


const Navigation = () => (
    <div className='navigation'>
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

        <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item"><a href="#" className="navigation__link">COMING SOON</a></li>
            </ul>
        </nav>

    </div>
)

export default Navigation;