import React from 'react';
import Services from './Services/Services';
import Cart from './Cart/Cart';
import Header from './Header/Header';
import Login from './Login/Login'
import Shipping from './Shipping/Shipping'
import NotFound from './NotFound/NotFound'
import OrderConfirmed from './OrderConfirmed/OrderConfirmed'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Footer from './Footer/Footer';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import NewService from './NewService/NewService';
import ManageOrders from './ManageOrders/ManageOrders';

const Components = () => {

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" >
                        <Services />
                    </Route>
                    <PrivateRoute path="/Service/:ServiceId">
                        <ServiceDetail />
                    </PrivateRoute>
                    <PrivateRoute path="/manageOrders">
                        <ManageOrders />
                    </PrivateRoute>
                    <PrivateRoute path="/Cart">
                        <Cart />
                    </PrivateRoute>
                    <PrivateRoute path="/NewService">
                        <NewService />
                    </PrivateRoute>
                    <PrivateRoute path="/Shipping">
                        <Shipping />
                    </PrivateRoute>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route path="/OrderConfirmed">
                        <OrderConfirmed />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Components;