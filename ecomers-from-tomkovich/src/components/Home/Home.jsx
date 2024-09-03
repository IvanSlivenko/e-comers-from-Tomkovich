import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



import  Poster  from '../Poster/Poster'
import  Poster_customeUkraine  from '../Poster/Poster_cstomeUkraine'
import Products from '../Products/Products'
import FilteredProducts from '../filteredProducts/filteredProducts'
import Categories from '../Categories/Categories'
import { Banner } from '../Banner/Banner'

import  PosterCustome  from '../Poster/Poster_custome'
import custome_categories from '../../custome_data/custome_categories'
import { filterByPrice } from '../../features/products/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  // const { products: {list, filtered }, categories } = useSelector(( state )=> state)
  const { products, categories } = useSelector(( state )=> state)


  useEffect(() => {
    if (!products.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, products.length]);

  return (
    <>
      {/* <Poster /> */}
      <Poster_customeUkraine />
      <Products products={products.list} amount = {5} title="Популярні товари"/>
      <Categories products={categories.list} amount = {5} title="Категорії"/>
      <Banner/>
      <FilteredProducts products={products.list} amount = {5} title="Товари до 800"/>
    </>
  )
}

export default Home