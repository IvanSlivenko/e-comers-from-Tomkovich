import styles from "../../styles/Product.module.css"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES }from '../../utils/routes.js'



const ProductCustome = ({ price, title, images, description }) => {

const SIZES = [4, 4.5, 5]    

// const currentImage = images[0]
  const [currentImage, setCurentImage]  = useState();
  const [currentSize, setCurentSize]  = useState();
  useEffect(()=>{
    if(!images.length) return;
     
    setCurentImage(images[0])
  },[images])
    
  return (
    <section className={styles.product}>
        <div className={styles.images}>
            <div className={styles.current}
            style={{backgroundImage: `url(${currentImage})`}}
            />
            <div className={styles['images-list']}>
            {images.map((image, i)=>(
                 <div
                 key={i} 
                 className={styles.image}
                 style={{backgroundImage: `url(${image})`}}
                 onClick={()=>setCurentImage(image)}
                 />    
            ))}  
            </div>
        </div>
        <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.price}>{price} грн.</div>
            <div className={styles.color}><span>Color:</span>Green</div>
            <div className={styles.sizes}><span>Sizes:</span>
                <div className={styles.list}>{SIZES.map((size)=>(
                    <div 
                        onClick={()=>setCurentSize(size)}   
                        className={`${styles.size}
                        ${currentSize === size ? styles.active : ""}`} 
                        key={size}
                        >
                         {size}       
                    </div>

                    ))}
                </div>
            </div>
            <p className={styles.description}>{description}</p>

            <div className={styles.actions}>
                <button className={styles.add} disabled={!currentSize}>Add to cart</button>
                <button className={styles.favorite} >Add to favorites</button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.purshase}>19 people purshased</div>
                <Link to={ROUTES.HOME}>
                    Retern to store
                </Link>
            </div>
        </div>

    </section>
  )
}

export default ProductCustome