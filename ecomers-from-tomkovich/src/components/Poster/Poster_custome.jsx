import React from 'react'
import styles from '../../styles/Home.module.css'



import BG from '../../images/computer.png'

const Poster = () => {
    return(
        <section className={styles.home}>
            <div className={styles.title} 
            style={{
                fontSize:"5rem",        
                paddingLeft:"2.8rem",
                paddingRight:"2.8rem"
            }}
            >
                Знання - це сила
            </div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div className={styles.subtitle}>Самоосвіта</div> 
                    <h1 className={styles.head}>Оператор 1С</h1>
                    <button className={styles.button}
                    style={{
                       marginTop:"4rem"
                    }}
                    >Почати навчання</button>
                </div>
                <div className={styles.image}>
                    <img src={BG} alt="Центральний банер" />

                </div>
            </div>
            
        </section>
    )
}
export default Poster
