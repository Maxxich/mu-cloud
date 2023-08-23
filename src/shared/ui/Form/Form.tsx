import classNames from 'classnames'
import cls from './Form.module.scss'

type Margin = 'auto' | 'none'

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode,
    margin?: Margin
}

const mapMarginToClass: Record<Margin, string> = {
  'auto': 'margin-auto',
  'none': ' '
}

export const Form: React.FunctionComponent<IFormProps> = ({
    children,
    margin = 'none',
    ...rest
}) => {
  return (
    <form className={classNames(cls.form, cls[mapMarginToClass[margin]])} {...rest}>
        {children}
    </form>
  );
};