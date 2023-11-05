'use client'
import classNames from 'classnames';
import { animated } from '@react-spring/web';
import { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { getIsInterfaceHidden } from '@/entity/player';
import cls from './Wrapper.module.scss'

interface IWrapperProps {
    children: ReactNode
    style: any
}

export const Wrapper: React.FunctionComponent<IWrapperProps> = ({
    children,
    style,
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
        <animated.div className={wrapperClasses} style={style}>
            {children}
        </animated.div>
    )
};