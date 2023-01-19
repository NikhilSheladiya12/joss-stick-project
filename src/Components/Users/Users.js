import React from 'react';
import Reacttable from './Table';

const Users = () => {
    return (
        <div id='users'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col m-5'>
                        <div className='user-head-part'>
                            <h3 className='user-heading-txt'>Users Data</h3>
                        </div>
                        <Reacttable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;
