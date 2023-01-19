import React from 'react';
import Reacttable from './OrderTable';
import './Orders.css';

// order main page 

const Orders = () => {
    return (
        <div id='order' style={{
            paddingLeft: "150px"
        }}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col m-5'>
                        <div className='order-head-part'>
                            <h3 className='order-heading-txt'>Order Data</h3>
                        </div>
                        <Reacttable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;
