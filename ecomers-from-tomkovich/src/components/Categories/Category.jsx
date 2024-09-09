import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { CustomeApyDate } from '../../custome_data/custome_ApyData.js'
import styles from "../../styles/Category.module.css"
import Products from '../Products/Products.jsx';



const Category = ({ title, style={} }) => {
  const { id } = useParams();
  
  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  }
  const defaultParams = {
    
    categoryId: id,
    ...defaultValues,

  };

  
  const [ values, setValues ] = useState(defaultValues);
  const [ params, setParams] = useState(defaultParams);
  
    useEffect(()=>{
      if(!id) return;
      setParams({ ...defaultParams, categoryId: id})

    },[id])


  const  data   = CustomeApyDate.filter(({ category }) => parseInt(category.id, 10) === parseInt(params.categoryId, 10))

  const handleCange = ({target: { value, name }}) =>{
    setValues({...values, [name]: value });
  }

   
  const isLoading = false
  const isSuccess = true

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>title</h2>
      <form 
        className={styles.filters}
        onSubmit={()=>{}}
      >
        <div className={styles.filter}>
            <input 
              type="text" 
              name="title"  
              placeholder="Ім'я продукта"
              onChange={handleCange}
              value={values.title}
            />
        </div>

        <div className={styles.filter}>
            <input 
              type="number" 
              name="price_min"  
              placeholder="Мінімальна ціна"
              onChange={handleCange}
              value={values.price_min}
            />
        </div>

        <div className={styles.filter}>
            <input 
              type="number" 
              name="price_max"  
              placeholder="Максимальна ціна"
              onChange={handleCange}
              value={values.price_max}
            />
        </div>
            <button type="submit" hidden />
      </form>

        {isLoading ? (
          <div className="preloader"> Loading ... </div>
        )
      :
      !isSuccess || !data.length ? (
        <div className={styles.back}>
          <span> Результати відсутні</span>
          <button> Reset </button>
        </div>        
      )
      :
      (
        <Products 
          title="" 
          productsCustome={data} 
          style={{ padding: 0}}
          amount={data.length}
        />
      )
      }

    </section>
  )
}

export default Category;