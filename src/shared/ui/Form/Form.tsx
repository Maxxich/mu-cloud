import { forwardRef, ForwardedRef } from 'react'
import classNames from 'classnames'
import cls from './Form.module.scss'

type Margin = 'auto' | 'none'

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode,
    margin?: Margin
    className?: string
}

const mapMarginToClass: Record<Margin, string> = {
    'auto': 'margin-auto',
    'none': ' '
}

const FormRoot: React.FunctionComponent<IFormProps> = ({
    children,
    margin = 'none',
    className,
    ...rest
}) => {
    return (
        <form className={classNames(cls.form, cls[mapMarginToClass[margin]], className)} {...rest}>
            {children}
        </form>
    );
};


interface IBoxProps extends React.FormHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  margin?: Margin
  className?: string
  ref?: ForwardedRef<HTMLDivElement>
}

const Box: React.FunctionComponent<IBoxProps> = forwardRef(({
    children,
    margin = 'none',
    className,
    ...rest
}, ref) => {

    return (
        <div className={classNames(cls.form, cls.box, cls[mapMarginToClass[margin]], className)} {...rest} ref={ref}>
            {children}
        </div>
    );
})

Box.displayName = 'Box'

export const Form = Object.assign(FormRoot, { Box })