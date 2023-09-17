import IconHome from '@/shared/assets/svg/Home.svg'
import IconLibrary from '@/shared/assets/svg/Library.svg'
import IconUpload from '@/shared/assets/svg/Upload.svg'
import IconLoupe from '@/shared/assets/svg/Loupe.svg'
import { User } from './User/User';
import cls from './NavbarMobile.module.scss';
import { NavLink } from './NavLink/NavLink';

interface INavBarProps {
}

export const NavbarMobile: React.FunctionComponent<INavBarProps> = (props) => {
    return ( 
        <div className={cls.container}>
            <NavLink
                icon={<IconHome/>}
                href={'/'}
            />
            <NavLink
                icon={<IconLibrary/>}
                href={'/library'}
            />
            <NavLink
                icon={<IconLoupe/>}
                href={'/search'}
            />
            <NavLink
                icon={<IconUpload/>}
                href={'/upload'}
            />
            <User/>
        </div>  
    );
};
