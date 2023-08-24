import classNames from 'classnames';
import cls from './Time.module.scss'
import { memo } from 'react';



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

