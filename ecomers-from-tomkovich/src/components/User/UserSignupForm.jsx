import React from 'react'
import styles from "../../styles/User.module.css"
import { useState } from 'react';


const UserSignupForm = () => {
    const [values, setValues]=useState({
        name: "",
        email:"",
        password:"",
        avatar:""

    });

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value });
    }

  return (
    <div className={styles.wrapper} >
        <div className={styles.close} >
            <svg className='icon'>
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}/>
            </svg>
            <div className={styles.title} >
                Sign Up
            </div>
            <form className={styles.form}>
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
                        type="name" 
                        placeholder="Ваш name" 
                        name="name" 
                        value={values.name} 
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

                <div className={styles.group} >
                    <input 
                        type="avatar" 
                        placeholder="Ваш avatar" 
                        name="avatar" 
                        value={values.avatar} 
                        autoComplete="off"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.link}>
                Я вже маю акаунт
                </div>
                <button type="submit" className={styles.submit}>
                    Створити акаунт
                </button>
            </form>
        </div>
    </div>
  )
}

export default UserSignupForm