import React, { useContext } from 'react'
import { styled } from 'styled-components'
import AuthContext from './context/authContext'

const SignupForm = () => {
    const {signupUser} = useContext(AuthContext)
    return (
        <Wrapper>
            <form onSubmit={signupUser}>
                <div className='form-fields'>
                    <h1>Join Medium.</h1>
                    <p>Finish creating your account for the full Medium experience.</p>
                    <label className='email-label' For="first-name">Enter First Name</label>
                    <input id = "first-name" className='email' type="text" name='text' placeholder='Enter First Name'/>
                    <label className='email-label' For="last-name">Enter Last Name</label>
                    <input id = "last-name" className='email' type="text" name='text' placeholder='Enter Last Name'/>
                    <label className='email-label' For="username">Usename</label>
                    <input id = "username" className='email' type="text" name='text' placeholder='Usename'/>
                    <label className='email-label' For="email">Your email</label>
                    <input id = "email" className='email' type="email" name='email' placeholder='Your email'/>
                    <label className='password-label' For="password">Enter password</label>
                    <input id = "password" className='password' type="password" name='password' placeholder='Enter password'/>
                    <label className='password-label' For="password2">Confirm password</label>
                    <input id = "password2" className='password2' type="password" name='password2' placeholder='Confirm password'/>
                    <input className='btn' type="submit" />
                </div>
            </form>
        </Wrapper>
    )
}
const Wrapper = styled.section`
form {
    width: 40%;
    margin: 40px auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    height: 700px;
}
label {
    display:none;
}
.form-fields {
    display: flex;
    width: 50%;
    padding: 80px;
    // box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
    align-items: center;
    margin: 50px auto;
    text-align: center;
    flex-direction: column;
}
h1 {
    font-size: 35px;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 32px;
    text-shadow: -5px 5px 11px grey;
    color: #000000;
    font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
}
p {
    font-size: 16px;
    line-height: 24px;
    color: #242424;
    text-shadow: -5px 5px 11px grey;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
}
.email-label {
    margin: -5px auto;
    outline: none;
    padding-top: 30px;
    font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
    border: none;
    font-weight: 400;
    font-style: normal;
    font-size: 17px;
    line-height: 1.58;
    letter-spacing: -.003em;
}
.password-label {
    margin: 0px auto;
    outline: none;
    font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
    border: none;
    font-weight: 400;
    font-style: normal;
    font-size: 17px;
    padding-top: 25px;
    line-height: 1.58;
    letter-spacing: -.003em;
}
input {
    height: 34px;
    border: none;
    background: transparent;
    width: 270px;
    outline: none;
    color: #000000b5;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    padding: 1px 2px;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    margin: 2px 10px;
    // border-bottom: 1px solid #0000007a;
    border-radius: 20px;
    font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
}
.email {
    background-color: white !important;
}
.btn {
    color: white;
    background-color: black;
    margin: 50px auto;
    width: 226px;
    text-decoration: none;
    box-sizing: border-box;
    border-style: solid;
    border-width: 1px;
    border-radius: 99em;
    border-color: rgba(25, 25, 25, 1);
    background: rgba(25, 25, 25, 1);
    padding: 1px 16px;
    line-height: 20px;
    font-size: 14px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
}

`;

export default SignupForm