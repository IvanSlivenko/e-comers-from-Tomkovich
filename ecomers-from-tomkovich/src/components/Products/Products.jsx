import React from 'react'

import { Link } from 'react-router-dom'

import styles from "../../styles/Products.module.css"

import { CustomeApyDate } from '../../custome_data/custome_ApyData.js'

import imgCart from '../../images/banner_urk.jpg'



const Products = ({ title, style={},  products=[], amount }) => {


    // const list = products.filter((_, i) => i < amount);
    // -----------------------------------------------------
    {/* products */}
    {/* CustomeApyDate */}
    const list = products.filter((_, i) => i < amount);
    
    return (
    <section className={styles.products} style={style}>
        {title && <h2>{title}</h2>}

        <div className={styles.list}>

        
        {list.map(({ id, images, title, category: { name: cat }, price})=>(

              <Link to={`/products/${id}`} key={id} className={styles.product}>
                <div
                className={styles.image}

                // style={{ backgroundImage: `url(${images[0]})` }}
                style={{ backgroundImage: `url(${imgCart})` }}

                />   


                
                <div className={styles.wrapper}>
                  <h3 className={styles.title}>{title}</h3>
                  <div className={styles.cat}>{cat}</div>
                  <div className={styles.info}>
                      <div className={styles.pices}>
                          <div className={styles.price}>{price} грн.</div>
                          <div className={styles.oldPrice}>{Math.floor(price * 0.8)} грн.</div>
                      </div>
                      <div className={styles.purchases}>
                          {Math.floor(Math.random() * 20 + 1)} вже придбали
                      </div>
                  </div>
                </div>
                </Link>
            ))}
        </div>
    </section>
  );
};

export default Products