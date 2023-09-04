'use client'

import { useCheckIsAuthOnRefresh } from '@/entity/viewer';

export const CheckIsAuth: React.FunctionComponent = (props) => {

    useCheckIsAuthOnRefresh()
    
  return (
    <></>
  );
};