import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../../styles/Sidebar.module.css'


import { categori_list } from '../../custome_data/custome_data.js'
import { custome_categories } from '../../custome_data/custome_categories.js'



const SideBar = () => {
  const { list } = useSelector(({ categories })=> categories)
  
  return (
    <section className={styles.sidebar}>
      <div 
        className={styles.title} 
        style={{
            fontSize: "1.5rem",
            textAlign: "center"
            
            }}
                >
                  Категорії
        </div>
      <nav>
        <ul className={styles.menu}>
          
          {/* categori_list */}
          {/*  Вивід категорій з данними навчального порталу 1С*/}
          {/* ----------------------------------------------------------------- */}
          {/* custome_categories */}
          {/*  Вивід категорій з Какстомними данними*/}
          {/* ------------------------------------------------------------ */}
          {/* list */}
          {/*  Вивід категорій з данними API*/}
          {/* ------------------------------------------------------------ */}

          {custome_categories.map(({ id, name })=>(
            <li key={id}>
            <NavLink 
            className={({ isActive })=> `${styles.link} ${isActive ? styles.active:""}`}
            to={`/categoris/${id}`}>{name}</NavLink>
          </li>
          ))}
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