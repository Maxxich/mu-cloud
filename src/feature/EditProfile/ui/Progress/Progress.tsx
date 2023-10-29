import { useSelector } from 'react-redux';
import { Progress as P } from '@/shared/ui/Progress';
import cls from './Progress.module.scss'
import { getProgress } from '../../model/selectors/getProgress';

export const Progress: React.FunctionComponent = (props) => {

    const progress = useSelector(getProgress)

    return (
        <div className={cls.progress_container}>
            <P
                progress={progress || 0}
            />
        </div>
    );
};