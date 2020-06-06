import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'antorganic',
                    imageUrl: 'assets/img/antorganic.jpg',
                    id: 1,
                    linkUrl: 'product/antorganic'
                },
                {
                    title: 'formant',
                    imageUrl: 'assets/img/formant.jpg',
                    id: 2,
                    linkUrl: 'product/formant'
                },
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
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, title, imageUrl, size }) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)

                }

            </div>
        );
    }
}

export default Directory;