import * as React from 'react';
import { ItemDesktop } from './ItemDesktop/ItemDesktop';
import { ItemMobile } from './ItemMobile/ItemMobile';
import { ItemProps } from './types';
import { InterfaceSeparator } from '../../InterfaceSeparator/InterfaceSeparator';

export type ItemComponent = React.FunctionComponent<ItemProps>

export const Item: ItemComponent = (props) => {

    return (
        <InterfaceSeparator
            desktopComponent={<ItemDesktop {...props}/>}
            mobileComponent={<ItemMobile {...props}/>}
        />
    )
};

