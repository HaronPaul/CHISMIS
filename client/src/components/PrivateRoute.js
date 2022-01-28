import React from "react";
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, user, ...rest}) => {
    return(
        <Route 
            {...rest}
            render = {(props) => {
                if(user) {
                    return <Component {...props} />
                } else {
                    return (
                        <Redirect
                        to={{
                          pathname: "/",
                          state: {
                            // sets the location a user was about to assess before being redirected to login
                            from: props.location,
                          },
                        }}
                      />
                    )
                }
            }}
        />
    )
}

export default PrivateRoute