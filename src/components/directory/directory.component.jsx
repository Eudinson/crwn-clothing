import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { sections } from './directory-sections-data';
import './directory.styles.scss';

const Directory = () => {
    return(
        <div className="directory-menu">
            {
                sections.map(({ id, ...sectionProps }) => {
                    return <MenuItem key={ id } { ...sectionProps } />
                })
            }
        </div>
    )
}

export default Directory;