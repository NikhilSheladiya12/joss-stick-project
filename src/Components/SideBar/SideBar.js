import React from 'react'
import { NavLink } from "react-router-dom";

import { RiDashboardFill } from "react-icons/ri";
import { FaUsers, FaClipboardList } from "react-icons/fa"
import { HiShoppingCart } from "react-icons/hi"
import { ImUserTie } from "react-icons/im"
import { GoSignOut } from "react-icons/go"

import "./css/main.css"

const SideBar = () => {

    return (
        <>
        <div  className="mainSideBar">
          {/* this is header */}
                <div className='headerInnerDiv'>
                        <h3 >
                            ABT
                        </h3>
                </div>
                
                <div className='innerHEffect'>
                    <NavLink to="/">
                        
                            <div className='inner1Div'>
                                <div className='innerImageDiv'>
                                <RiDashboardFill />
                                </div>
                                <span className='innerSpan'>DashBoard</span>
                            </div>
                        
                    </NavLink>
                </div>

                <div className='innerHEffect'>
                    <NavLink to="/salesmens">
                        
                            <div className='inner1Div'>
                                <div className='innerImageDiv'>
                                <ImUserTie />
                                </div>
                                <span className='innerSpan'>Sales Mens</span>
                            </div>
                        
                    </NavLink>
                </div>

                <div className='innerHEffect'>
                    <NavLink to="/users">
                        
                            <div className='inner1Div'>
                                <div className='innerImageDiv'>
                                <FaUsers />
                                </div>
                                <span className='innerSpan'>Users Data</span>
                            </div>
                        
                    </NavLink>
                </div>

                <div className='innerHEffect'>
                    <NavLink to="/products">
                        
                            <div className='inner1Div'>
                                <div className='innerImageDiv'>
                                <FaClipboardList />
                                </div>
                                <span className='innerSpan'>Products</span>

                            </div>
                        
                    </NavLink>
                </div>

                <div className='innerHEffect'>
                    <NavLink to="/orders">
                        
                            <div className='inner1Div'>
                                <div className='innerImageDiv'>
                                <HiShoppingCart />
                                </div>
                                <span className='innerSpan'>Orders</span>
                            </div>
                        
                    </NavLink>
                </div>

                <div className='innerHEffect'>
                    <NavLink to="/profile">
                        
                            <div className='inner1Div'>
                                <div className='innerImageDiv'>
                                <HiShoppingCart />
                                </div>
                                <span className='innerSpan'>Profile</span>
                            </div>
                        
                    </NavLink>
                </div>

                <div className='innerHEffect'>
                    <NavLink to="/login">
                        
                            <div className='inner1Div'>
                                <div className='innerImageDiv'>
                                <GoSignOut />
                                </div>
                                <span className='innerSpan'>Sign Out</span>
                            </div>
                        
                    </NavLink>
                </div>
        </div>
        </>
    );
}

export default SideBar;
