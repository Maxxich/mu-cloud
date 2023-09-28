import { NavbarDesktop } from './Desktop/NavbarDesktop';
import { NavbarMobile } from './Mobile/NavbarMobile';

interface INavbarProps {
    isMobile: boolean
}

export const Navbar: React.FunctionComponent<INavbarProps> = ({
    isMobile
}) => {

    if (isMobile) return (
        <NavbarMobile/>
    )
    
    return <NavbarDesktop/>
};