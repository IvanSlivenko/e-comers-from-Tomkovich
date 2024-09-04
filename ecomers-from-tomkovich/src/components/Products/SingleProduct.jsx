import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice';
import Product from './Product';

import { ROUTES } from '../../utils/routes';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();  

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  
  useEffect(()=>{
    if(!isFetching && !isLoading && !isSuccess){
      navigate(ROUTES.HOME)
    }

  },[isLoading, isFetching, isSuccess]);
  
  return !data ? (
      <section className='preloader'>loading...</section>
                ): (
                  <>
                    <Product {...data}/>
                  </>
                ); 
};

export default SingleProduct;
