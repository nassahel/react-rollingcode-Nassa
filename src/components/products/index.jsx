import React, { useEffect, useState } from 'react'
import { useGetData } from '../../hooks/useGetData'
import { getAxiosData } from '../../helpers/getRequest';
import CardItem from '../card-item';
import './styles.css';

export const Products = () => {

  const categories = useGetData('/categories');

  const [productList, setProductList] = useState({});

  const groupProducts = (products) => {
    const productsGroupedGyCategory = {};

    categories.forEach((category, index) => {
      productsGroupedGyCategory[category] = products[index]
    });

    setProductList(productsGroupedGyCategory);
  };

  const getProductByCategory = async() => {
    const productByCategory = categories.map(e => getAxiosData(`/category/${e}`));

    const products = await Promise.all(productByCategory);
    groupProducts(products);
  }

  useEffect(() => {
    if(categories.length === 0) return;

    getProductByCategory();
  }, [categories])

  return (
    <div className='products'>
      <h1>Productos</h1>
      <div>
        {
          categories && categories.map(category => (
            <div key={category} className='products__category'>
              <h3 className='products__category__title'>{category}</h3>
              <div className='products__category__list'>
                {
                  productList[category].map(product => (
                    <CardItem
                      key={product.id}
                      title={product.title}
                      price={product.price}
                      image={product.image}
                    />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
