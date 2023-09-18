import * as React from 'react';
import { ItemsDesktop } from './ItemsDesktop/ItemsDesktop';
import { ItemsMobile } from './ItemsMobile/ItemsMobile';
import { ItemsComponent } from './types';
import { InterfaceSeparator } from '../../InterfaceSeparator/InterfaceSeparator';

export const Items: ItemsComponent = (props) => {

    return (
        <InterfaceSeparator
            desktopComponent={<ItemsDesktop {...props}/>}
            mobileComponent={<ItemsMobile {...props}/>}
        />
    )
};

