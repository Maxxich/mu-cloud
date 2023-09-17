import * as React from 'react';
import { InterfaceSeparator } from '@/shared/ui/InterfaceSeparator/InterfaceSeparator';
import { UserHeaderMobile } from './Mobile/MobileHeaderMobile';
import { UserHeaderDesktop } from './Desktop/UserHeaderDesktop';
import { HeaderProps } from '../types/HeaderProps';

export const UserHeader: React.FunctionComponent<HeaderProps> = (props) => {

    return (
        <InterfaceSeparator
            desktopComponent={<UserHeaderDesktop {...props}/>}
            mobileComponent={<UserHeaderMobile {...props}/>}
        />
    )
};

