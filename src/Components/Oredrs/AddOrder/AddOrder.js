import React from 'react';
import Usertable from './Addtable';

const AddOrder = () => {
  return (
    <div style={{
      paddingLeft: "150px"
    }}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col m-5'>
            <div className='order-head-part'>
              <h3 className='order-heading-txt'>Add Order User Select</h3>
            </div>
            <Usertable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddOrder;