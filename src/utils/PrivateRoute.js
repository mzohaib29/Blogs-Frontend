import React, {useContext} from 'react'
import { Route, Navigate, Routes, Outlet } from 'react-router-dom'
import AuthContext from '../context/authContext'

const PrivateRoute = () => {
    let {user} = useContext(AuthContext)
    // console.log("user i n", user)
    // let auth = user ? true : false
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute