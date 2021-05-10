import React from 'react';
import { Route } from 'react-router-dom';
import CollectiosnOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection.component';
import './shop.styles.scss';


const ShopPage = ({ match }) => {
    
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={ CollectiosnOverview } />
            <Route path={`${match.path}/:collectionId`} component={ CollectionPage }/>
        </div>
    )
}

export default ShopPage;