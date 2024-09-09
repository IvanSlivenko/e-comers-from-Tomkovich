import React from 'react'
import styles from '../../styles/Home.module.css'



import BG from '../../images/computer.png'
import BG_ukr from '../../images/banner_urk.jpg'

const Poster_customeUkraine = () => {
    return(
        <section className={styles.home} 
        style={{ backgroundImage: `url(${BG_ukr})` }}
        
        >
            <div className={styles.title}>Історія 100%</div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div className={styles.subtitle}
                    style={{
                        color:'white'

                    }}
                    >the bestseller of 2024</div> 
                    <h1 className={styles.head}
                    //  style={{
                    //     color:'burlywood'

                    // }}
                    >Україна  <br /> Етнічна </h1>
                    <button className={styles.button}
                    
                     style={{
                        background: "black"

                    }}

                    >
                        Почати</button>
                </div>
                {/* <div className={styles.image}>
                    <img src={BG} alt="Центральний банер" 

                    
                    />

                </div> */}
            </div>
            
        </section>
    )
}
export default Poster_customeUkraine
