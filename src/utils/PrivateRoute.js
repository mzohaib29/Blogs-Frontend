import React, {useContext} from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import AuthContext from '../context/authContext'

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    console.log("user i n", user)
    let auth = user ? true : false
    return (
        // <></>
        // <Routes>
        <Route {...rest}>{!auth ? <
            Navigate
            to
            =
            "/login"
            replace
            /> : children }
        </Route>
        // </Routes>
    )
}

export default PrivateRoute