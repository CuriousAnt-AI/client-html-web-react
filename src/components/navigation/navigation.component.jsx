import React from 'react';
import './navigation.styles.scss';


const Navigation = () => (
    <div className='navigation'>
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>
        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item"><a href="#" class="navigation__link">Home</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link">Contact</a></li>
                <li class="navigation__item"><a href="#" class="navigation__link">Sign Up</a></li>
            </ul>
        </nav>

    </div>
)

export default Navigation;