import React from 'react';
import './footer.styles.scss';


// import { ReactComponent as Logo } from '../../assets/curious-ant-logo.svg'
//import { auth } from 'firebase';

const Footer = ({ currentUser }) => (
    <footer className='footer'>
        <div className="row">
            <div className="col-1-of-4">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-4">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-4">
                <p className="footer__copyright">
                    Copyright @ Curious Ant 2020
                </p>
            </div>
        </div>
        <div className="footer__logo-box">
            {/* <picture className="footer__logo">
                <source srcSet=""
                    media="(max-width: 37.5em)" />
                <img srcSet="" height="52" width="52" alt="Full logo" src="" />
            </picture> */}
            <picture className="social_logo">
                <source srcSet="assets/img/google_icon.svg, assets/img/google_icon.svg"
                    media="(max-width: 37.5em)" />
                <img srcSet="assets/img/google_icon.svg, assets/img/google_icon.svg" height="24" width="24" alt="Full logo" src="assets/img/google_icon.svg" />
            </picture>
            <picture className="social_logo">
                <source srcSet="assets/img/facebook_square_color.svg, assets/img/facebook_square_color.svg"
                    media="(max-width: 37.5em)" />
                <img srcSet="assets/img/facebook_square_color.svg, assets/img/facebook_square_color.svg" height="24" width="24" alt="Full logo" src="assets/img/facebook_square_color.svg" />
            </picture>
            <picture className="social_logo">
                <source srcSet="assets/img/linkedin_square_color.svg, assets/img/linkedin_square_color.svg"
                    media="(max-width: 37.5em)" />
                <img srcSet="assets/img/linkedin_square_color.svg, assets/img/linkedin_square_color.svg" height="24" width="24" alt="Full logo" src="assets/img/linkedin_square_color.svg" />
            </picture>
        </div>
    </footer>
)

export default Footer;