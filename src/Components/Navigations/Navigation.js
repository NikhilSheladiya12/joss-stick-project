import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainOutlet from '../Outlets/MainOutlet';

import LoginForm from '../Login/LoginForm';
import DashBoard from '../DashBoard/DashBoard';
import Orders from '../Oredrs/Orders';
import SalesMens from '../SalesMens/SalesMens';
import Products from '../Products/Products';
import Users from '../Users/Users';
import Profile from '../Profile/Profile';
import Varient from '../Products/Varient';
import Duser from '../DashBoard/DashbordUser/Duser';
import Dorder from '../DashBoard/DashbordOrder/Dorder';
import AddOrder from '../Oredrs/AddOrder/AddOrder';
import OrderForm from '../Oredrs/OrderForm/OrderForm';


export default function Navigation() {
  return (
    <BrowserRouter>
        <Routes>
          {/* nested rounting */}
            <Route path='/' element = {<MainOutlet/>}>

              <Route index element = {<DashBoard />} />
              <Route path='/dashbord-user' element = {<Duser />} />
              <Route path='/dashbord-order' element = {<Dorder />} />

              <Route path='users' element = {<Users />} />

              <Route path='/orders' element = {<Orders />} />
              <Route path='/addorder' element = {<AddOrder />} />
              <Route path='/orderform' element = {<OrderForm />} />

              <Route path='/salesmens' element = {<SalesMens />} />
              <Route path='/products' element = {<Products />} />
              <Route path='/profile' element = {<Profile />} />
              <Route path='/varient' element = {<Varient />} />

            </Route>

            {/* non nested rounting */}

            <Route path="/login" element={<LoginForm/>}/>

        </Routes>
    </BrowserRouter>
  )
}