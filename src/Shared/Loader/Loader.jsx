import React from 'react';

import { Puff } from 'react-loader-spinner';

import { LoadWrapper } from './loader.styled';

const Loader = () => {
  return (
    <LoadWrapper>
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#e98b10"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoadWrapper>
  );
};
export default Loader;
