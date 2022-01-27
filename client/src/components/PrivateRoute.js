import React from "react";
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <div>
            <h1> This is a private route</h1>
        </div>
    )
}