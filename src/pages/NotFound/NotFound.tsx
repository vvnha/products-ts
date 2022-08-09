import React from 'react';

import MainLayout from 'components/layouts/MainLayout';
import NotFoundContainer from '../../components/NotFound/NotFoundContainer';

function NotFound() {
  return (
    <MainLayout>
      <NotFoundContainer name="Page" />
    </MainLayout>
  );
}

export default NotFound;
