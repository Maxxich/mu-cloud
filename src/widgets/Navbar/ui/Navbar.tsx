'use client'
import { isMobile } from 'react-device-detect';
import { NavbarMobileAsync } from './Mobile/NavbarMobile.async';
import { NavbarDesktopAsync } from './Desktop/NavbarDesktop.async';

interface INavbarProps {
}

export const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    if (isMobile) return <NavbarMobileAsync/>
    return <NavbarDesktopAsync/>
};