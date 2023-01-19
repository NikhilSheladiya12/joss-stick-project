import React from 'react';
import Products from '../../Products/Products';

const OrderForm = () => {
    return (
        <div style={{
            paddingLeft: "150px"
        }}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col m-5'>
                        <div className='order-head-part'>
                            <h3 className='order-heading-txt'>Order Form</h3>
                        </div>
                        
                        <div>
                            <Products />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderForm;
