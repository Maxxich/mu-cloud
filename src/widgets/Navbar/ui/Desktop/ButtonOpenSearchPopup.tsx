import * as React from 'react';
import { GET_ENUMS } from 'const/popupRouter';
import { usePopup } from 'shared/lib';
import { IconButton, IconLoupe } from 'shared/UI';

interface IButtonOpenSearchPopupProps {

}

export const ButtonOpenSearchPopup: React.FunctionComponent<IButtonOpenSearchPopupProps> = ({}) => {

  const openPopup = usePopup()

  const handleClick = (e: React.SyntheticEvent) => {
    openPopup({
      popup: GET_ENUMS.popup.search,
      ids: []
    })
  }

  return (
    <IconButton
      extraIcon={<IconLoupe color='var(--primary-color)'/>}
      onClick={handleClick}
      size={15}
    />
  );
};