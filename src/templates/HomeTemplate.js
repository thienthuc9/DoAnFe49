import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';




export const HomeTemplate = ({ Component, ...restProps }) => {
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <Component {...propsRoute} />
            <Footer></Footer>
        </Fragment>
    }} />
}

