import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src="assets/video.mp4" type="video/mp4" />
                    <source src="assets/video.webm" type="video/webm" />
                    Your browser is not supported!
                    </video>
            </div>
        </div>

    )
}

export default HomePage;