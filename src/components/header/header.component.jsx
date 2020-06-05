import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/curious-ant-logo.svg'
//import { auth } from 'firebase';

const Header = ({ currentUser }) => (
    <header className='header'>
        {/* <div className='header__logo-box'>
            <img src='' alt='curious-ant-logo' className='header__logo' />
        </div> */}
        <div className='header__text-box'>
            <h1 className="heading-primary">
                <span className="heading-primary--main">CURIOUSANT</span>
                <span className="heading-primary--sub">PASSIONATLY CURIOUS</span>
            </h1>
        </div>
    </header>

)

export default Header;