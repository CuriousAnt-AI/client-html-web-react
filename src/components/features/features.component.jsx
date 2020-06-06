import React from 'react';
import './features.styles.scss';
import FeatureBox from '../../components/feature-box/feature-box.component';

class Features extends React.Component {
    constructor() {
        super();

        this.state = {
            features: [
                {
                    title: 'antomation',
                    imageUrl: 'assets/img/antomation.jpg',
                    id: 3,
                    linkUrl: 'product/antomation'
                },
                {
                    title: 'antrance',
                    imageUrl: 'assets/img/antrance-b.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'product/antrance',
                },
                {
                    title: 'antronics',
                    imageUrl: 'assets/img/antronics.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'product/antronics',
                }
            ]
        }
    }
    render() {
        return (
            <section className="section-features">

                <div className="row">

                    {
                        this.state.features.map(({ id, title, imageUrl, size }) => {
                            return (<div className="col-1-of-3">
                                <FeatureBox key={id} title={title} imageUrl={imageUrl} size={size} />
                            </div>)
                        })

                    }
                </div>
            </section>
        );
    }
}

export default Features;