import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CustomeApyDate } from '../../custome_data/custome_ApyData.js'
import { custome_categories } from '../../custome_data/custome_categories.js'
import styles from "../../styles/Category.module.css"
import Products from '../Products/Products.jsx';



const Category = ({ title, style={} }) => {
  const { id } = useParams();
  
  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };

  const defaultParams = {
    categoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  };

  const defaultDataLength ={
    currentdataLength: 5,
    step: 5,
  }

  
  const [isEnd, setEnd] = useState(false);
  const [cat, setCat] = useState('');
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(defaultDataLength)

 
    
  useEffect(()=>{
    if(!id) return;

    setValues(defaultValues);
    // setItems([]);
    setEnd(false);
    
    setParams({ ...defaultParams, categoryId: id});
    setDataLength({ ...dataLength, currentdataLength: 5 })

  },[id])

  // Логування стану isEnd, коли він змінюється
useEffect(() => {
  console.log(isEnd, '---isEnd');
}, [isEnd]);


useEffect(() => {
  console.log(data.length, '---data.length');
  console.log(dataLength.currentdataLength, '---dataLength.currentdataLength');

  if (dataLength.currentdataLength < data.length) {
    setEnd(false); // Оновлюємо стан на "не кінець"
  } else {
    setEnd(true);  // Оновлюємо стан на "кінець"
  }
}, [dataLength]); // Виклик залежить від dataLength
  
    
  useEffect(() => {
    if (isLoading) return;

    
    if (!data.length){
      setEnd(true); // Оновлюємо стан на "кінець"
      return;
    }

  
    const currentProducts = Object.values(data);
  
    if (!currentProducts.length) return;
    
  
    // Оновлюємо масив items
    setItems((_Items) => [..._Items, ...currentProducts]);

  
  }, [data]);



  // const  data   = CustomeApyDate.filter(({ category }) => parseInt(category.id, 10) === parseInt(params.categoryId, 10))
  // Використовуємо useEffect для фільтрації даних при зміні params
  useEffect(() => {
    const filteredData = CustomeApyDate.filter(({ category, title, price }) => {
      const matchesCategory = parseInt(category.id, 10) === parseInt(params.categoryId, 10);
      const matchesTitle = title.toLowerCase().includes(params.title.toLowerCase());
      const matchesPriceMin = price >= parseInt(params.price_min, 10) || !params.price_min;
      const matchesPriceMax = price <= parseInt(params.price_max, 10) || !params.price_max;

      // const matchesPriceMin = !params.price_min || price >= parseInt(params.price_min, 10);
      // const matchesPriceMax = !params.price_max || price <= parseInt(params.price_max, 10);

      return matchesCategory && matchesTitle && matchesPriceMin && matchesPriceMax;
    });
    
    setData(filteredData);
  }, [params]); // Залежимо від зміни params


  useEffect(() => {
    const currentCategory = custome_categories.filter(({ id }) => 
      parseInt(id, 10) === parseInt(params.categoryId, 10)
    );
  
    const { name: CurrentCategoryName } = currentCategory.length ? currentCategory[0] : {};
  
    setCat(CurrentCategoryName);
  
  }, [params.categoryId]); // Залежимо від зміни params.categoryId



  // Оновлюємо значення форми
const handleChange = ({ target: { value, name } }) => {
  setValues({ ...values, [name]: value });
};

// Обробка форми
const handleSubmit = (e) => {
  e.preventDefault();
  setItems([])
  setEnd(false )

  // Оновлюємо параметри для фільтрації
  setParams({ ...defaultParams, ...values });
};

   
const isLoading = false
const isSuccess = true


  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{cat}</h2>
      <form 
        className={styles.filters}
        onSubmit={handleSubmit}
      >
        <div className={styles.filter}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Ім'я товару"
            value={values.title}
          />
        </div>

        <div className={styles.filter}>
          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="Мінімальна ціна"
            value={values.price_min}
          />
          <span>Price from</span>
        </div>

        <div className={styles.filter}>
          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="Максимальна ціна"
            value={values.price_max}
          />
          <span>Price to</span>
        </div>
            <button type="submit" hidden />
      </form>

        {isLoading ? (
          <div className="preloader"> Loading ... </div>
        )
      :
      // !isSuccess || !data.length ? (
        !data.length ? (
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
          amount={dataLength.currentdataLength}
        />
        
      )}
       {!isEnd && (
        <div className={styles.more}>        
                  <button onClick={()=>
                                      //  setParams({ ...params, offset: params.offset + params.limit })
                                      setDataLength({ ...dataLength, currentdataLength: dataLength.currentdataLength + dataLength.step })
                                      }
                                      >
                      See more
                  </button>
                </div>
              )}
    </section>
  )
}

export default Category;