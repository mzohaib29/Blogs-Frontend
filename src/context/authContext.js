import { createContext, useState} from "react";
import jwt_decode from "jwt-decode";
// import { useHistory } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    
    const [authToken, setAuthToken] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    const [user, setUser] = useState(localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);

    console.log(authToken)
    // const history = useHistory()

    const loginUser = async (e) => {
        const handleRedirect = () => {
            // Redirect the user to the desired URL
            window.location.href = '/';
        };
        e.preventDefault()
        const response = await fetch('https://medium-app-dot-cloud-work-314310.ew.r.appspot.com/apiBase/auth/', {   
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
            console.log("Something went wrong")
        }
    }

    // const SignupUser = async (e) => {

    const signupUser = async (e) => {
        const handleRedirect = () => {
            // Redirect the user to the desired URL
            window.location.href = '/login';
        };
        e.preventDefault()
        const response = await fetch('https://medium-app-dot-cloud-work-314310.ew.r.appspot.com/apiBase/signup/', {   
            method: 'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify({'username': e.target.username.value ,'email': e.target.email.value, 'password': e.target.password.value, 'password2': e.target.password2.value}),
        })
        const data = await response.json()
        console.log(data)
        if(response.status === 201){
            handleRedirect()
        }else{
            alert('Something went wrong')
        }
    }
    // }

    
    let contextData = {
        user:user,
        loginUser:loginUser,
        signupUser:signupUser,
    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}