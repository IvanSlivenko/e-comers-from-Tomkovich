import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import styles from "../../styles/User.module.css";

import UserSignupForm from './UserSignupForm';
import UserLoginForm from './UserLoginForm';

import { toggleForm, toggleFormType } from '../../features/user/userSlice';
 

const UserForm = () => {
    const dispatch = useDispatch();
    const { showForm, formType } = useSelector(({ user }) => user);

    const closeForm = ()=> dispatch(toggleForm(false))
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type))

    return showForm ? 
        (
            <>
                <div 
                    className={styles.overlay} 
                    onClick={closeForm} 
                />
                        {
                            formType === 'signup' ?  
                                (<UserSignupForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />)
                            : 
                                (
                                <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
                                )
                        }
                        
            </>
        ) 
        : 
        (
            <></>
        );
};
 

export default UserForm;