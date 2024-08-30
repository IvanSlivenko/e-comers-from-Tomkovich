import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../../styles/Sidebar.module.css'


import { categori_list } from '../../custome_data/custome_data.js'



const SideBar = () => {
  const { list } = useSelector(({ categories })=> categories)
  console.log('list', list);
  
  return (
    <section className={styles.sidebar}>
      <div 
        className={styles.title} 
        style={{
            fontSize: "1.5rem",
            textAlign: "center"
            
            }}
                >
                  Розділи
        </div>
      <nav>
        <ul className={styles.menu}>
          {/*  Вивід категорій з Какстомними данними*/}
          {/* ------------------------------------------------------------- */}
          {categori_list.map(({ id, name })=>(
            <li key={id}>
            <NavLink 
            className={({ isActive })=> `${styles.link} ${isActive ? styles.active:""}`}
            to={`/categoris/${id}`}>{name}</NavLink>
          </li>
          ))}
          {/* ------------------------------------------------------------ */}
          {/* {list.map(({ id, name })=>(
            <li key={id}>
            <NavLink 
            className={({ isActive })=> `${styles.link} ${isActive ? styles.active:""}`}
            to={`/categoris/${id}`}>{name}</NavLink>
          </li>
          ))} */}
          {/* ------------------------------------------------------------- */}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href='/help' target='_blank' className={styles.link}>
          Help
        </a>
        <a href='/terms' target='_blank' className={styles.link} style={{ textDecoration: "underline"}}>
          Terms & Conditions
        </a>
      </div>

        
    </section>
  )
}

export default SideBar