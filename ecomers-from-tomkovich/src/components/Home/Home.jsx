import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Poster_customeUkraine from '../Poster/Poster_customeUkraine';
import Products from '../Products/Products';
import FilteredProducts from '../filteredProducts/filteredProducts';
import Categories from '../Categories/Categories';
import { Banner } from '../Banner/Banner';

import { filterByPrice } from '../../features/products/productSlice';

const Home = () => {
  const dispatch = useDispatch();

  // const { products: {list, filtered }, categories } = useSelector(( state )=> state)
  // const { products, categories } = useSelector(( state )=> state)
  const { productsCustome, categories } = useSelector((state) => state);

  useEffect(() => {
    if (!productsCustome.length) return;
    dispatch(filterByPrice(100)); // Фільтруємо продукти за ціною
  }, [dispatch, productsCustome.length]);

  return (
    <>
      <Poster_customeUkraine />
      {/* Використовуємо productsCustome як масив */}
      <Products products={productsCustome} amount={5} title="Популярні товари" />
      <Categories products={categories.list} amount={5} title="Категорії" />
      <Banner />
      <FilteredProducts products={productsCustome} amount={5} title="Товари до " />
    </>
  );
};

export default Home;
