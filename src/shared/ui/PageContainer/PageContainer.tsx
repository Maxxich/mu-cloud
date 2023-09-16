'use client'

import { ReactNode } from 'react'
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';
import cls from './PageContainer.module.scss'

interface IPageContainerProps {
    children: ReactNode
}

export const PageContainer: React.FunctionComponent<IPageContainerProps> = ({
    children
}) => {

    const classes = classNames(
        cls.container,
        isMobile ? cls.paddingMobile : cls.paddingDesktop
    )
    
    return (
        <div className={classes}>
            {children}
        </div>
    );
};