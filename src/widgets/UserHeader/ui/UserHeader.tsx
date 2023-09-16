'use client'

import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { User } from '@/entity/user';
import { UserHeaderMobile } from './Mobile/MobileHeaderMobile';
import { UserHeaderDesktop } from './Desktop/UserHeaderDesktop';

interface IUserHeaderProps {
    user: User
}

export const UserHeader: React.FunctionComponent<IUserHeaderProps> = ({
    user
}) => {

    if (isMobile) return <UserHeaderMobile user={user}/>

    return (
        <UserHeaderDesktop user={user}/>
    );
};

