import React from 'react';
import CollectionItem from '../../components/collection-items/collection-item.component';
import './collection.styles.scss';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';


const CollectionPage = ({match}) => {

    const collection = selectCollection(match.params.collectionId)(useSelector(state => state))

    const { title, items } = collection

    return(
        <div className="collection-page">
            <h1>{title}</h1>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={ item.id } item={ item }/>)
                }
            </div>
        </div>
    )
}

export default CollectionPage;
