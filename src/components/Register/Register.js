import React, { useState } from 'react'
import APIServices from '../../API/APIServices'
import { Link, useNavigate } from 'react-router-dom'


export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [address, setAddress] = useState('')
    const [emailValidate, setEmailValidate] = useState('');
    const [userNameValidate, setUserNameValidate] = useState('');
    const [passwordValidate, setPasswordValidate] = useState('');
    const [confirmPasswordValidate, setConfirmPasswordValidate] = useState('');
    const navigate = useNavigate();

    const validateEmail = () => {
        if(!email || email === ''){
            setEmailValidate("Email field can't be blank")
        } else if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))){
            setEmailValidate("Email pattern is not valid")
        } else {
            setEmailValidate("")
            return true
        }
        return false
    }
    const validateUserName = () => {
        if(!userName || userName === ''){
            setUserNameValidate("User name field can't be blank")
        } else if(userName.length < 6){
            setUserNameValidate("User name length can't be smallerthan 6")
        } else {
            setUserNameValidate("")
            return true
        }
        return false
    }
    const validatePassword = () => {
        if(!password || password === ''){
            setPasswordValidate("Password field can't be blank")
        } else if(!(/[@#]/g.test(password))){
            setPasswordValidate("Password must contain one special character(@,#)")
        } else if(!(/[a-z]/g.test(password))){
            setPasswordValidate("Password must contain at least one lower case letter")
        } else if(!(/[A-Z]/g.test(password))){
            setPasswordValidate("Password must contain at least one upper case letter")
        } else if(!(/[0-9]/g.test(password))){
            setPasswordValidate("Password must contain at least one digit")
        } else if(password.length < 7){
            setPasswordValidate("Password must be longer than 7 letters")
        } else if(password.length > 14){
            setPasswordValidate("Password must be shorter than 14 letters")
        } else {
            setPasswordValidate("")
            return true
        }
        return false
    } 
    const validateConfirmPassword = () => {
        if(!password || password === ''){
            setConfirmPasswordValidate("Password field can't be blank")
        } else if(!(/[@#]/g.test(password))){
            setConfirmPasswordValidate("Password must contain one special character(@,#)")
        } else if(!(/[a-z]/g.test(password))){
            setConfirmPasswordValidate("Password must contain at least one lower case letter")
        } else if(!(/[A-Z]/g.test(password))){
            setConfirmPasswordValidate("Password must contain at least one upper case letter")
        } else if(!(/[0-9]/g.test(password))){
            setConfirmPasswordValidate("Password must contain at least one digit")
        } else if(password.length < 7){
            setConfirmPasswordValidate("Password must be longer than 7 letters")
        } else if(password.length > 14){
            setConfirmPasswordValidate("Password must be shorter than 14 letters")
        } else if(password !== confirmPassword){
            setConfirmPasswordValidate("Password and Confirm Password don't match")
        } else {
            setConfirmPasswordValidate("")
            return true
        }
        return false
    }

    const registerFormSubmit = (e) => {
        e.preventDefault()
        if(validateUserName() && validateEmail() && validatePassword() && validateConfirmPassword() ){
            let data = {
                name: name,
                email: email,
                password: password,
                userName: userName,
                address: address
            }
            let registerStatus = APIServices.register(data);
            if(registerStatus)
                navigate("/login")
        }
        else 
            console.log("validation failed");
    }

  return (
    <>
        <div className="login_register_wrap section mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-xl-6 col-md-10'>
                        <div className='login_wrap'>
                            <div className='padding_eight_all bg-white'>
                                <div className='heading_s1'>
                                    <h3>Login</h3>
                                </div>
                                <form action="" method="">
                                    <div className='form-group mb-3'>
                                        <input type="text" placeholder='User Name' required className='form-control' name='userName' onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='error-message mb-3'>
                                           <small className='text-danger'>{userNameValidate}</small> 
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type="text" placeholder='Your Name' required className='form-control' name='name' onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type="email" placeholder='Your Email' required className='form-control' name='email'onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className='error-message mb-3'>
                                           <small className='text-danger'>{emailValidate}</small> 
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type="password" placeholder='Your Password' required className='form-control' name='password' onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className='error-message mb-3'>
                                           <small className='text-danger'>{passwordValidate}</small> 
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type="password" placeholder='Confirm Password' required className='form-control' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}/>
                                    </div>
                                    <div className='error-message mb-3'>
                                           <small className='text-danger'>{confirmPasswordValidate}</small> 
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type="text" placeholder='Your Address' required className='form-control' name='address' onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button onClick={(e) => registerFormSubmit(e)} type="submit" className='btn btn-block btn-lg btn-pink'>
                                            Log in
                                        </button>
                                    </div>
                                </form>
                                <div className='different_login'>
                                    <span>OR</span>
                                </div>
                                <div className='form-note text-center'>
                                    Dont have an account?
                                    <Link to="/login" className='signUpLink'>Login now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
