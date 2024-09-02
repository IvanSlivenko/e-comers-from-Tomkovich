import React from 'react'
import styles from "../../styles/Products.module.css"

const Products = ({ title, style={},  products=[], amount }) => {
    const list = products.filter((_, i)=> i < amount);
    return (
    <section className={styles.products} style={style}>
        {title && <h2>{title}</h2>}
        {list.map(({ id, images, title, category: { name: cat }, price})=>
        <div className={styles.list}>
            <Link to={`/products/${id}`} key={id} className={styles.product}>
              <div className={styles.image} style={{ backgroundImage:`url${images[0]}`}}>

              </div>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.cat}>{cat}</div>
                <div className={styles.info}>
                    <div className={styles.pices}>
                        <div className={styles.price}>{price} грн.</div>
                        <div className={styles.oldPrices}>{Math.floor(price * 0.8)} грн.</div>
                    </div>
                    <div className={styles.purchases}>
                        {Match.floor(Match.random() *20 +1)} вже придбали
                    </div>
                </div>
              </div>
              </Link>
        </div>
        )}
    </section>
  )
}

export default Products