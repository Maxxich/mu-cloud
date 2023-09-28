import * as React from 'react';
import { ItemDesktop } from './ItemDesktop/ItemDesktop';
import { ItemMobile } from './ItemMobile/ItemMobile';
import { ItemProps } from './types';

export type ItemComponent = React.FunctionComponent<ItemProps & {
    isMobile: boolean
}>

export const Item: ItemComponent = ({
    isMobile,
    ...props
}) => {

    if (isMobile) return (
        <ItemMobile {...props}/>
    )
    
    return  <ItemDesktop {...props}/>

}
