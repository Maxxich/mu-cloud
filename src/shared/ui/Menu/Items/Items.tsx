import { ItemsDesktop } from './ItemsDesktop/ItemsDesktop';
import { ItemsMobile } from './ItemsMobile/ItemsMobile';
import { IItemsProps } from './types';

export const Items:  React.FunctionComponent<IItemsProps & {
    isMobile: boolean
}> = ({
    isMobile,
    ...props
}) => {

    if (isMobile) return (
        <ItemsMobile {...props}/>
    )

    return  <ItemsDesktop {...props}/>
};

