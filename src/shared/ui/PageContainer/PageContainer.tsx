import { ReactNode } from 'react'
import classNames from 'classnames';
import cls from './PageContainer.module.scss'
import { InterfaceSeparator } from '../InterfaceSeparator/InterfaceSeparator';

interface IPageContainerProps {
    children: ReactNode
}

export const PageContainer: React.FunctionComponent<IPageContainerProps> = ({
    children
}) => {

    return <InterfaceSeparator
        desktopComponent={
            <div className={classNames(cls.conatiner, cls.paddingDesktop)}>
                {children}
            </div>
        }
        mobileComponent={
            <div className={classNames(cls.conatiner, cls.paddingMobile)}>
                {children}
            </div>
        }
    />
};