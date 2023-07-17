import { createContext, useState} from "react";
import jwt_decode from "jwt-decode";
// import { useHistory } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    
    const [authToken, setAuthToken] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    const [user, setUser] = useState(localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);

    // const history = useHistory()

    const loginUser = async (e) => {
        const handleRedirect = () => {
            // Redirect the user to the desired URL
            window.location.href = '/';
        };
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/apiBase/auth/', {   
            method: 'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify({'email': e.target.email.value, 'password': e.target.password.value}),
        })
        const data = await response.json()
        console.log(data)
        if(response.status === 200){
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            // history.push('/')
            handleRedirect()
        }else{
            alert('Something went wrong')
        }
    }

    // const SignupUser = async (e) => {

    // }

    
    let contextData = {
        user:user,
        loginUser:loginUser,
        // SignupUser:SignupUser
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}