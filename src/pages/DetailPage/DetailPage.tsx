/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';

import { getProductByCode } from 'services/products/product-services';
import ProductDetailContainer from 'components/ProductDetail';
import NotFoundContainer from 'components/NotFound/NotFoundContainer';
import useNotFound from 'customHooks/useNotFound';
import MainLayout from 'components/layouts/MainLayout';

function DetailPage() {
  const { productCode } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isError, setIsError } = useNotFound({
    callbackFn: () => {
      getProductDetail(productCode);
    },
  });

  const getProductDetail = async (code: string | undefined) => {
    if (code === undefined) return;

    setIsLoading(true);
    const response = await getProductByCode(code);
    if (response.data.data?.length > 0) {
      setProductDetail(response.data.data[0]);
    } else {
      setIsError(true);
    }

    setIsLoading(false);
  };

  return (
    <MainLayout>
      {isError === true && <NotFoundContainer name="Record" />}
      {isLoading && <Loader />}
      {!isError && !isLoading && productDetail !== null && (
        <ProductDetailContainer product={productDetail} />
      )}
    </MainLayout>
  );
}

export default DetailPage;
