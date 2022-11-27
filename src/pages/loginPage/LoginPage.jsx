import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { setIsLogin } from '../../store/actions/loginAction';
import './index.css'

export const LoginPage = () => {
    const isDisabled = useSelector(state => state.loginReducer.isDisabled)
    const history = useHistory()
    const dispatch = useDispatch()
    // not controlled inputs
    const inputUsernameRef = useRef(null);
    const inputPWRef = useRef(null);
    const inputButtonRef = useRef(null);

    let handleChange = (e) => {
        if (
            inputUsernameRef.current.value === 'developer21' &&
            +inputPWRef.current.value === 123456){
               dispatch(setIsLogin(false))
               inputButtonRef.current = false
        }else{
               dispatch(setIsLogin(true))
               inputButtonRef.current.disabled = isDisabled
        } 
   }

   const handleSubmit = (e) => { 
       e.preventDefault()
       history.push('/Profile')
   }
   
    return (
        <div>
            <form action="/" onSubmit={handleSubmit}>
                <div className="wrapper">
                    <div className="form-control">
                        <label htmlFor="Login">Login: </label>
                        <input 
                               onChange={(e)=> { handleChange(e)}}
                               name="username" 
                               id="username"
                               ref={inputUsernameRef} 
                               type="text"
                        />
                    </div>
                    <div className="form-control">
                        <label 
                            htmlFor="Login">Password: </label>
                        <input 
                            name="username" 
                            id="username" 
                            type="password"
                            ref={inputPWRef}
                            onChange={(e)=> { handleChange(e)}}
                        />
                    </div>
                    <button 
                        type='submit' 
                        disabled={isDisabled} 
                        ref={inputButtonRef} 
                        className="form__login-button"
                     >
                        <Login/>
                    </button>
                </div>
            </form>
        </div>
    )
}
