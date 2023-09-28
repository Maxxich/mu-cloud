import { ReactNode } from 'react'
import classNames from 'classnames';
import cls from './PageContainer.module.scss'

interface IPageContainerProps {
    children: ReactNode
    isMobile: boolean
}

export const PageContainer: React.FunctionComponent<IPageContainerProps> = ({
    children,
    isMobile
}) => {

    if (isMobile) return (
        <div className={classNames(cls.conatiner, cls.paddingMobile)}>
            {children}
        </div>
    )
    
    return (
        <div className={classNames(cls.conatiner, cls.paddingDesktop)}>
            {children}
        </div>
    )
};