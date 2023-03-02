import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import Header from "@containers/Header";
import ProductItem from '@components/ProductItem';
import "@styles/home.scss";

const API = "https://api.escuelajs.co/api/v1/products?limit=5&offset=1"

const Home = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <Header />
      {products.map(product => (
        <ProductItem product={product} key={product.id}/>
      ))}
    </section>
  )
}

export default Home