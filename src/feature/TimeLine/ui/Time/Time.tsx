import classNames from 'classnames';
import { memo } from 'react';
import cls from './Time.module.scss'



interface ITimingsProps {
    children: string
    variant: 'mobile' | 'desktop'
}

export const Time: React.FunctionComponent<ITimingsProps> = memo(({
    children,
    variant
}) => {

  return (
    <span 
        className={classNames(cls.time, cls[variant])}
    >
        {children}
    </span>
  );
})

Time.displayName = 'Time'

