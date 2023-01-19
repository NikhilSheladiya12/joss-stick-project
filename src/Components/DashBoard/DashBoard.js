import React from 'react';
import { Link } from 'react-router-dom';

import "./css/DashBoard.css"

const DashBoard = () => {


    return (
        <div style={{
            paddingLeft: "150px"
        }}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col m-5'>
                        <div className='dashbord-head-part'>
                            <h3 className='dashbord-heading-txt'>Dashbord</h3>
                            <div className='dashbord-main-btn'>
                                <Link to="/dashbord-user" className='dashbord-user-btn' type='button'>Users</Link>
                                <Link to="/dashbord-order" className='dashbord-order-btn' type='button'>Orders</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DashBoard;
