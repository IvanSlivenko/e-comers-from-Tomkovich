import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../styles/Footer.module.css'

import { ROUTES } from '../../utils/routes'

import LOGO from '../../images/logo.svg'
import LOGO2 from '../../images/logo2.jfif'
import AVATAR from '../../images/avatar.jpg'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img className={styles.logo_image} src={LOGO2} alt="Logo" />
            </Link>
        </div>
        <div className={styles.rights}>
            <a 
              href="https://www.facebook.com/profile.php?id=100074231555339" 
              target='_blank'
              rel='noreferrer'
            >
              Developed by UmanProger
              
            </a>
           
        </div>
        <div className={styles.socials}>
        <a 
              href="https://www.facebook.com/pokrivlyaifasad/" 
              target='_blank'
              rel='noreferrer'
            >
              <svg className={styles['icon-cart']}>
                  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/pokrivliafasad/" 
              target='_blank'
              // rel='noreferrer'
            >
              <svg className={styles['icon-cart']}>
                  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
              </svg>
            </a>
            <a 
              href="https://bud-express.in.ua" 
              target='_blank'
              rel='noreferrer'
            >
              <svg className={styles['icon-cart']}>
                  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
              </svg>
            </a>
          

          
        </div>

    </section>
  )
}

export default Footer;