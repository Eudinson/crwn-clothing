import React from 'react';
import './collections-overview.styles.scss';
import { useSelector } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';


const CollectionsOverview = () => {

    const collections = selectCollectionsForPreview(useSelector(state => state))

    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />
                })
            }
        </div>
    )
}

export default CollectionsOverview;
