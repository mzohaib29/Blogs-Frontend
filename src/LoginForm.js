import React, { useState, useEffect, useContext } from 'react';
import { styled } from 'styled-components';
import AuthContext from './context/authContext';


function LoginForm() {
    let {loginUser} = useContext(AuthContext)
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [csrfToken, setCsrfToken] = useState('');

    // const API_1 = "http://127.0.0.1:8000/accounts/login/get_csrf_token/";
    // useEffect(() => {
    //     // Fetch the CSRF token from your Django backend
    //     fetch(API_1)
    //     .then(response => response.json())
    //     .then(data => {
    //         setCsrfToken(data.csrfToken);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // }, []);

    // const API = "http://127.0.0.1:8000/accounts/login/";
    // const handleLogin = () => {
    //     // Make a POST request to your login API endpoint
    //     fetch(API, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-CSRFToken': csrfToken, // Include the CSRF token in the request headers
    //     },
    //     body: JSON.stringify({ username, password }),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // Handle the response data, such as storing authentication tokens
    //         // or updating the UI based on the login status
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         // Handle any error that occurred during the request
    //         console.error('Error:', error);
    //     });
    // };

    return (
        <Wrapper>
            <form onSubmit={loginUser}>
                <input className='username' type="text" name='username' placeholder="Enter Username" />
                <input className='password' type="password" name='password' placeholder="Password"/>
                <input type="submit" />
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.section`
.login-form {
    margin: 50px;
}
`;

export default LoginForm;
