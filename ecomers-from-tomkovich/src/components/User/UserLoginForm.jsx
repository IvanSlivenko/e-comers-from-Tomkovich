import React from 'react'
import styles from "../../styles/User.module.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  loginUser } from '../../features/user/userSlice';


const UserLoginForm = ({ closeForm, toggleCurrentFormType }) => {
    const dispatch = useDispatch();
    const [values, setValues]=useState({
        email:"",
        password:"",


    });

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const isNotEmpty = Object.values(values).every(val => val)

        if(!isNotEmpty) return;
        dispatch(loginUser(values));
        closeForm();

    }

  return (
    <div className={styles.wrapper} >
        <div className={styles.close} onClick={closeForm}>
            <svg className='icon'>
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}/>
            </svg>
        </div>

        <div className={styles.title} >
                Log In
        </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group} >
                    <input 
                        type="email" 
                        placeholder="Ваш email" 
                        name="email" 
                        value={values.email} 
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </div>

                

                <div className={styles.group} >
                    <input 
                        type="password" 
                        placeholder="Ваш password" 
                        name="password" 
                        value={values.password} 
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </div>

                

                <div className={styles.link} onClick={()=>toggleCurrentFormType("signup")}>
                    Створити користувача
                </div>
                <button type="submit" className={styles.submit}>
                    Увійти
                </button>
            </form>
    </div>
  )
}

export default UserLoginForm