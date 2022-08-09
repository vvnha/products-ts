/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';

import { getProductByCode } from 'services/products/product-services';
import AddEditContainer from 'components/AddEditPage';
import useNotFound from 'customHooks/useNotFound';
import NotFoundContainer from 'components/NotFound/NotFoundContainer';
import { ProductFormValue } from 'models';
import MainLayout from 'components/layouts/MainLayout';

function AddEditPage() {
  const { productCode } = useParams();
  const [productDetail, setProductDetail] = useState<ProductFormValue | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isError, setIsError } = useNotFound({
    callbackFn: () => {
      if (productCode) getProductDetail(productCode);
    },
  });

  const getProductDetail = async (code: string) => {
    setIsLoading(true);
    if (productCode) {
      const response = await getProductByCode(code);
      if (response.data.data?.length > 0) {
        setProductDetail(response.data.data[0]);
      } else {
        setIsError(true);
      }
    }
    setIsLoading(false);
  };

  return (
    <MainLayout>
      {isError === true && <NotFoundContainer name="Record" />}
      {isLoading && <Loader />}
      {!isError && !isLoading && <AddEditContainer product={productDetail} />}
    </MainLayout>
  );
}

export default AddEditPage;
