import * as React from 'react';
import { IconLogout } from 'shared/UI';
import { useAppDispatch } from 'app/model/store';
import { logOut } from 'shared/model';
import { useLazyLogoutQuery } from 'shared/api';
import { Action } from './Action';

interface ILogoutProps {
}

export const Logout: React.FunctionComponent<ILogoutProps> = (props) => {

  const dispatch = useAppDispatch()
  const [logoutQuery] = useLazyLogoutQuery()

  const handleClick = async () => {
    logoutQuery()
    dispatch(logOut())
  }

  return <Action
    onClick={handleClick}
    extraIcon={<IconLogout/>}
    text='Выйти'
  />;
};
