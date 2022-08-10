import React, { useEffect, useState } from 'react';
import { getAllProduct } from 'services/products/product-services';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Loader from 'components/Loader';
import ProductList from 'components/Home/ProductList';
import Pagination from 'components/Home/Pagination';
import MainLayout from 'components/layouts/MainLayout';
import { Product } from 'models';

import { PRODUCT_NUMBER_COUNT } from '../../constants';

export default function Home() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const [totalCount, setTotalCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getDefaultParams = () => {
    if (!searchParams.get('page')) searchParams.set('page', '1');
    if (!searchParams.get('limit')) searchParams.set('limit', PRODUCT_NUMBER_COUNT.toString());

    navigate({
      pathname: '/',
      search: searchParams.toString(),
    });

    return {
      page: searchParams.get('page'),
      limit: searchParams.get('limit'),
    };
  };

  const getProductList = async () => {
    setIsLoading(true);
    const params = getDefaultParams();

    const response = await getAllProduct(params);
    setProductList(response.data);
    setTotalCount(response.totalCount);
    setIsLoading(false);
  };

  function handleClickPagination(page: number) {
    searchParams.set('page', page.toString());
    navigate({
      pathname: '/',
      search: searchParams.toString(),
    });
  }

  useEffect(() => {
    try {
      getProductList();
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  return (
    <MainLayout>
      {/* <About /> */}
      {isLoading && <Loader />}
      {!isLoading && <ProductList productList={productList} />}
      {/* <Skills /> */}
      <Pagination
        searchParams={searchParams}
        onClick={handleClickPagination}
        totalCount={totalCount}
      />
      {/* <Contact /> */}
    </MainLayout>
  );
}
