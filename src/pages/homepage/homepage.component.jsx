import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className="placeload">
                <div className="placeload-header">
                    <div className="img loads"></div>
                    <div className="header-content">
                        <div className="content-shape loads"></div>
                        <div className="content-shape loads"></div>
                    </div>
                </div>
                <div className="image-placeholder loads"></div>
                <div className="placeholder-footer">
                    <div className="footer-block">
                        <div className="content-shape loads"></div>
                        <div className="content-shape loads"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage;