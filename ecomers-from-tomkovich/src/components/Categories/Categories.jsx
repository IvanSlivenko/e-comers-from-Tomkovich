import React from 'react'
import styles from "../../styles/Categories.module.css"
import { Link } from 'react-router-dom';

import { custome_categories } from '../../custome_data/custome_categories.js'

const Categories = ({ title, products=[], amount }) => {
    // const list = products.filter((_, i) => i < amount);
    // ------------------------------------------------
    {/* products     */}
    {/* custome_categories */}
    const list = custome_categories.filter((_, i) => i < amount);

  return (
    <section className={styles.section}>
        <h2 >{title}</h2>
        <div className={styles.list}>

       
        {list.map(({id, name, image, })=>(
            <Link to={`/categories/${id}`} key={id} className={styles.item}>
                <div
                className={styles.image}
                style={{ backgroundImage: `url(${image})` }}
                // style={{ backgroundImage: `url(${image[0]})` }}

                />   

                <h3 className={styles.title}>{name}</h3>
            </Link>
        ))} 

        </div>

    </section>
  )
}

export default Categories