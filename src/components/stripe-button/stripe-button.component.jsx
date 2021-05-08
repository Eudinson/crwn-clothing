import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HiyArDlI6ptima0juFCc8jSiFpwVvPqxLnDcUQuMirg7gAvQM5zuRXTLvHQUVKqwBb0QERCfzN8XF1F4dRCH5aj00N4H4Jial';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful' )
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Demo Shop'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;