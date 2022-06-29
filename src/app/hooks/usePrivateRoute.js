import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import {useSelector} from "react-redux";




function usePrivateRoute({ auth: { isAuthenticated }, children  }) {


    const [loginSuccess, setLoginSuccess]=useState(false)
    let user = useSelector(store => store.user);
    console.log(user);
    {user.tokens?setLoginSuccess(true):setLoginSuccess(false)}


    return isAuthenticated ? children :    <Navigate to={'/'}/>;
};

export default usePrivateRoute;

// import React from "react";
// import { Navigate, Route } from 'react-router-dom';
// import {useSelector} from "react-redux";
//
// const PrivateRoute = ({children, ...rest}) => {
//     const {user} = useSelector(state => state);
//     const Component = React.cloneElement(children, {...rest});
//     return (
//         <Route
//             {...rest}
//             render={() =>
//                 user.tokens? (
//                     Component
//                 ) : (
//                     <Navigate
//                         to={{
//                             pathname: "/login",
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }
//
//
// export default PrivateRoute;