import React from 'react';
import { collections } from './collection-items';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = () => {
    return(
        <div className="shop-page">
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return <CollectionPreview key={id} { ...otherCollectionProps }/>
                })
            }
        </div>
    )
}

export default ShopPage;