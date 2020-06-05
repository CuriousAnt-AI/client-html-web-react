import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/curious-ant-logo.svg'
//import { auth } from 'firebase';

const Header = ({ currentUser }) => (
    <header className='header'>
        {/* <div className='ca-logo-box'>
            <img src='' alt='curious-ant-logo' className='ca-logo' />
        </div> */}
        <div className='ca-header-box'>
            <h1 className='ca-primary-heading'>
                <span className='ca-primary-heading-main'>CURIOUSANT</span>
                <span className='ca-primary-heading-sub'>PASSIONATLY CURIOUS</span>
            </h1>
        </div>
    </header>
)

export default Header;