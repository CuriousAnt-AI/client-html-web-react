import React from 'react';
import './about.styles.scss';

const About = () => (
    <section className='section-about'>
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                Business process automation is the next level streamlining of the workflow
            </h2>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with automation</h3>
                <p className="paragraph">
                    As the volumes of data are usually high, compiling them in one single process is a tedious and lengthy process. Not to forget, since they are done manually, there is always scope for multiple human errors and miscalculations.
                </p>
                <p className="paragraph">
                    Business process automation is the next level streamlining of the workflow which subsequently affects the workforce with improved efficacy and no room for error. A company is able to focus on important propositions and agenda without worrying about the time-consuming tasks and documentation.
                </p>
            </div>
            <div className="col-1-of-2">
                <div className="about-bg">

                    <img sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                        alt="about-section-bg"
                        className="about-bg__photo"
                        src="assets/img/undraw_segment_analysis_bdn4.svg" />
                </div>
            </div>
        </div>


    </section>
)

export default About;