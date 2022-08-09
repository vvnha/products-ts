import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from 'models';
import './ProductContainer.scss';

export interface ProductContainerProps {
  product: Product;
}

function ProductContainer({ product }: ProductContainerProps) {
  const navigate = useNavigate();

  const handleClickSeeDetail = (event: React.MouseEvent): void => {
    event.preventDefault();

    if (!product) return;

    navigate(`/detail/${product.code}`);
  };

  return (
    <div className="product">
      <div className="product__name">
        <h3>{product.name}</h3>
      </div>

      <div className="product__img">
        <img
          data-id="thumbnail"
          src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          className="card-img-top"
          alt="recipe"
        />
      </div>

      <p className="product__description">{product.description}</p>
      {/* {product.stack && (
      <ul className='product__stack'>
        {product.stack.map((item) => (
          <li key={uniqid()} className='product__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )} */}

      <ul className="product__stack">
        <li className="product__stack-item">
          <a href="!#" onClick={handleClickSeeDetail}>
            <button type="button" className="btn btn--outline">
              See product detail
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProductContainer;
