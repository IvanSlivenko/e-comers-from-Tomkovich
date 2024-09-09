import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


import styles from '../../styles/Header.module.css'

import { ROUTES } from '../../utils/routes'

import LOGO from '../../images/logo.svg'
import LOGO2 from '../../images/logo2.jfif'
import LOGO3 from '../../images/logo_3.jpg'
import AVATAR from '../../images/avatar.jpg'
import { CustomeImgList } from '../../custome_data/custome_img_list.js'

import { toggleForm } from '../../features/user/userSlice';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import { useGetProductsCustomeQuery } from '../../features/api/apiSliceСustome';
import { createrandomNumbername } from '../../utils/common.js'
import { getCurrentProduct } from '../../utils/common.js';
import { CustomeApyDate } from '../../custome_data/custome_ApyData.js'


const Header = () => {
  const [searchValue, setSearchValue] = useState("");  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {currentUser} = useSelector(({ user })=> user)
  
  const [values, setValues] = useState({ name: "Guest", avatar: AVATAR })

//   const{ data, isLoading } = useGetProductsQuery({title: searchValue});
//   const{ data, isLoading } = useGetProductsCustomeQuery({title: searchValue});

 
  const list_search = CustomeApyDate.filter(({title})=> title.toLowerCase().includes(searchValue))
  const isLoading = false;

        useEffect(()=>{
            if(!currentUser) return;

            setValues(currentUser);
        },[currentUser])
  
  const handleClick = ()=>{
    if(!currentUser) dispatch(toggleForm(true))
    else navigate(ROUTES.PROFILE)
    

  }

  const handleSearch = ({target: { value }})=>{
    setSearchValue(value)
  }
  
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img className={styles.logo_image} src={LOGO3} alt="Logo" />
            </Link>
        </div>
        <div className={styles.info}>
            <div className={styles.user} onClick={handleClick}>
                <div className={styles.avatar} style={{ backgroundImage:`url(${values.avatar})`}}/>
                    
                <div className={styles.username}>
                    {values.name}
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
                        onChange={handleSearch}
                        value={searchValue}

                    />

                </div>
                {searchValue && <div className={styles.box}>
                    {isLoading ? 'loading' : !list_search.length ? "No results" : (
                        // data
                        // list_search
                        list_search. map(({title, images, id, price }) => {
                            return (
                                <Link
                                    key={id} 
                                    onClick={()=>setSearchValue("")} 
                                    className={styles.item} to={`/products/${id}`}>
                                    
                                    <div className={styles.image}
                                        style={{ backgroundImage: `url(${CustomeImgList[createrandomNumbername()]})`}}
                                    />
                                    <div className={styles.title}>
                                        {title}

                                    </div>
                                    <div className={styles.price}>{price} грн.</div>
    
                                    
                                </Link>
                            )

                        }
                    ))}

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