import { UserHeaderMobile } from './Mobile/MobileHeaderMobile';
import { UserHeaderDesktop } from './Desktop/UserHeaderDesktop';
import { HeaderProps } from '../types/HeaderProps';

export const UserHeader: React.FunctionComponent<HeaderProps & {
    isMobile: boolean
}> = ({
    isMobile,
    ...rest
}) => {

    if (isMobile) return (
        <UserHeaderMobile {...rest}/>
    )
    
    return  <UserHeaderDesktop {...rest}/>
};

