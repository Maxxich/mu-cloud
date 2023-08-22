import { memo } from 'react';
import cls from './Text.module.scss';
import classNames from 'classnames';

export type TextVariant = 'primary' | 'error' | 'secondary';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

interface TextProps {
    className?: string;
    title?: boolean;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    children: string,
}


const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold,
        children
    } = props;

    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [cls[variant], cls[align], sizeClass, className];

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls.bold]: bold
    }

    if (title) return (
        <HeaderTag
            className={classNames(
                cls.title,
                mods,
                additionalClasses
            )}
        >
            {children}
        </HeaderTag>
    )

    return (
        <p className={classNames(
            cls.text,
            mods,
            additionalClasses
        )}>
            {children}
        </p>
    );
})

Text.displayName = 'Text'