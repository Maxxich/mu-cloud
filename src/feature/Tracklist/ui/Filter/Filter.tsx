import { ReactElement, memo } from 'react';
import cls from './Filter.module.scss'

interface IFilterForActiveProps {
  children: ReactElement
}

export const Filter: React.FunctionComponent<IFilterForActiveProps> = memo(({
    children
}) => {



    return (
        <div className={cls.Filter}>
            {children}
        </div>
    );
})

Filter.displayName = 'Filter'

