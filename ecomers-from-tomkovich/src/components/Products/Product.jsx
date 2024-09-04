import React from 'react'
import styles from "../../styles/Product.module.css"
import imgCart from '../../images/banner_urk.jpg'
import { CustomeImgList } from '../../custome_data/custome_img_list'
import { Link } from 'react-router-dom'
import { ROUTES }from '../../utils/routes'



const Product = ({ price, title, images, description }) => {

const SIZES = [4, 4.5, 5]    

// images
// CustomeImgList  
  const currentImage = CustomeImgList[0]
    
  return (
    <section className={styles.product}>
        <div className={styles.images}>
            <div className={styles.current}
            style={{backgroundImage: `url(${currentImage})`}}
            // style={{backgroundImage: `url(${CustomeImgList[0]})`}}
            />
            <div className={styles['images-list']}>
            {CustomeImgList.map((image, i)=>(
                 <div
                 key={i} 
                 className={styles.image}
                 style={{backgroundImage: `url(${image})`}}
                 onClick={()=>{}}
                 />    
            ))}  
            </div>
        </div>
        <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.price}>{price}</div>
            <div className={styles.color}><span>Color:</span>Green</div>
            <div className={styles.sizes}><span>Sizes:</span>
                <div className={styles.list}>{SIZES.map((size)=>(
                    <div 
                        onClick={()=>{}}   
                        className={`${styles.size}`} 
                        key={size}
                        >
                         {size}       
                    </div>

                    ))}
                </div>
            </div>
            <p className={styles.description}>{description}</p>

            <div className={styles.actions}>
                <button className={styles.add} >Add to cart</button>
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

export default Product