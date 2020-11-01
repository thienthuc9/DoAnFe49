import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';




export const HomeTemplate = ({ Component, ...restProps }) => {
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <Component {...propsRoute} />
        </Fragment>
    }} />
}

