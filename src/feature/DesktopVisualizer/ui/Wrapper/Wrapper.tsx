import classNames from 'classnames';
import { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { getIsInterfaceHidden } from '@/entity/player';
import cls from './Wrapper.module.scss'

interface IWrapperProps {
    children: ReactNode
}

export const Wrapper: React.FunctionComponent<IWrapperProps> = ({
    children
}) => {

    const isInterfaceHidden = useSelector(getIsInterfaceHidden)

    const wrapperMods: Mods = {
        [cls.hiddenCursor]: isInterfaceHidden
    }
    
    const wrapperClasses = classNames(
        cls.wrapper,
        wrapperMods
    )

    return (
        <div className={wrapperClasses}>
            {children}
        </div>
    )
};