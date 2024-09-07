import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


import styles from '../../styles/Header.module.css'

import { ROUTES } from '../../utils/routes'

import LOGO from '../../images/logo.svg'
import LOGO2 from '../../images/logo2.jfif'
import LOGO3 from '../../images/logo_3.jpg'
import AVATAR from '../../images/avatar.jpg'
import { toggleForm } from '../../features/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(({ user })=> user)
  
  const hadleClick = ()=>{
    if(!currentUser) dispatch(toggleForm(true))

  }
  
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img className={styles.logo_image} src={LOGO3} alt="Logo" />
            </Link>
        </div>
        <div className={styles.info}>
            <div className={styles.user} onClick={hadleClick}>
                <div className={styles.avatar} style={{ backgroundImage:`url(${AVATAR})`}}/>
                    
                <div className={styles.username}>
                    Учень № 1
                </div>
            </div>
            <form className={styles.form}>
                <div className={styles.icon}>
                    <svg>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
                    </svg>
                </div>
                <div className={styles.input}>
                    <input 
                        type="search" 
                        name='search'
                        placeholder='Щось шукаєте...'
                        autoComplete='off'
                        onChange={()=>{}}
                        value=""

                    />

                </div>
                {false && <div className={styles.box}>
                    miniGalery

                </div>}
            </form>
            <div className={styles.account}>
                <Link to={ROUTES.HOME} className={styles.favorites}>
                    <svg className={styles['icon-fav']}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
                    </svg>
                </Link> 
                <Link to={ROUTES.CART} className={styles.cart}>
                    <svg className={styles['icon-cart']}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
                    </svg>
                    <span className={styles.count}>10</span>
                </Link> 

            </div>
        </div>
    </div>
  )
}

export default Header;