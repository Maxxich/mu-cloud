import cls from './Progress.module.scss'

interface IProgressProps {
    progress: number
    margin?: string
}

export const Progress: React.FunctionComponent<IProgressProps> = ({
    margin,
    progress
}) => {
    return (
        <div className={cls.wrapper} style={{
            margin
        }}>
            <div className={cls.inner} style={{
                width: progress + '%'
            }}/>
        </div>
    );
};
