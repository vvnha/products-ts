import React from 'react';
import { Product } from 'models';
import './ProductList.scss';

import uniqid from 'uniqid';
import ProductContainer from '../ProductContainer';

export interface ProductListProps {
  productList: Product[];
}

function ProductList(props: ProductListProps) {
  const { productList } = props;

  if (productList.length < 0) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Products</h2>

      <div className="projects__grid">
        {productList.map((product) => (
          <ProductContainer key={uniqid()} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
