import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice';
import Product from './Product';
import ProductCustome from './ProductCustome';
import { CustomeApyDate } from '../../custome_data/custome_ApyData.js'
import { getCurrentProduct } from '../../utils/common.js';
import Products from '../Products/Products'

import { ROUTES } from '../../utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProducts } from '../../features/products/productSlice.js';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const {list, related }= useSelector(({ products }) => products)
  

// customeData
// ---------------------------------------------------------------------------

const currentProduct = getCurrentProduct(id, CustomeApyDate);

 useEffect(() => {
  if (!currentProduct) {
    navigate(ROUTES.HOME);
  }
}, [currentProduct, navigate]);

const { price, title, images, description} = currentProduct; // Деструктуризація знайденого продукту

return !currentProduct ? (
  <section className='preloader'>loading...</section>
            ): (
              <>
              <ProductCustome 
                price={price} 
                title={title} 
                images={images} 
                description={description} 
              />
              </>
            ); 

// -------------------------------------------------------------------------------------------------


  // Api
  // -----------------------------------------------------------------------------------------------

  // const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id }); 
  
  // useEffect(()=>{
  //   if(!isFetching && !isLoading && !isSuccess){
  //     navigate(ROUTES.HOME)
  //   }

  // },[isLoading, isFetching, isSuccess]);

  // useEffect(() => {
    
  //   if (!data || !list.length) return;

  //   dispatch(getRelatedProducts(data.category.id));
  // }, [data, dispatch, list.length]);
  
  // return !data ? (
  //     <section className='preloader'>loading...</section>
  //               ): (
  //                 <>
  //                 <Product {...data}/>
  //                 <Products products={related} amount = {5} title="Схожі товари"/>
  //                 </>
  //               ); 

//  -------------------------------------------------------------------------------------------------               
};

export default SingleProduct;
