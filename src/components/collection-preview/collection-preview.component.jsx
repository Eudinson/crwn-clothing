import React from 'react';
import CollectionItem from '../collection-items/collection-item.component';
import './collection-preview.styles.scss';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ title, items }) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span style={{marginBottom:'10px'}}>See more { title } item <Link to={`/shop/${title.toLowerCase()}`} style={{color:'blue', borderBottom:'1px solid blue'}}>here</Link></span>
            <div className="preview">
                {
                    items.filter((item, index) => index < 4).map((item) => {
                        return(
                            <CollectionItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPreview;