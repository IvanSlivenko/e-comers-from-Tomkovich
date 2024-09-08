import React, { useEffect   }  from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../../styles/Profile.module.css'

import { createUser, updateUser } from '../../features/user/userSlice'

const Profile = () => {
    const dispatch = useDispatch();
    const { currentUser} = useSelector(({ user })=>user)
    const [values, setValues]=useState({
        name: "",
        email:"",
        password:"",
        avatar:""

    });

    useEffect(()=>{
        if(!currentUser) return;
    
        setValues(currentUser);
      },[currentUser])

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const isNotEmpty = Object.values(values).every(val => val)

        if(!isNotEmpty) return;
        dispatch(updateUser(values));


    }

  return (
    <section className={styles.profile}>
        {!createUser ? <span>Вам потрібно авторизуватися</span> : (
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

            <button type="submit" className={styles.submit}>
                Оновити акаунт
            </button>
        </form>
        )}

    </section>
  )
}

export default Profile