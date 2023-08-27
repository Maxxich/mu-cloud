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


interface IErrorProps extends React.FormHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  margin?: Margin
  className?: string
}

const Error: React.FunctionComponent<IErrorProps> = ({
  children,
  margin = 'none',
  className,
  ...rest
}) => {
return (
  <div className={classNames(cls.form, cls.error, cls[mapMarginToClass[margin]], className)} {...rest}>
      {children}
  </div>
);
};

export const Form = Object.assign(FormRoot, { Error })