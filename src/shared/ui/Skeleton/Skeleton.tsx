import { CSSProperties, memo } from 'react';
import classNames from 'classnames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, borderRadius } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: borderRadius,
    };

    return (
        <div
            className={classNames(cls.Skeleton, className)}
            style={styles}
        />
    );
});

Skeleton.displayName = 'Skeleton'
