import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = () => {

    const sections = selectDirectorySections(useSelector(state => state))

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