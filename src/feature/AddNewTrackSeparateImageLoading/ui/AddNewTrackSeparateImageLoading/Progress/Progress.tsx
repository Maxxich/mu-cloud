import { useSelector } from 'react-redux';
import { Progress as P } from '@/shared/ui/Progress';
import cls from './Progress.module.scss'
import { getProgress } from '../../../model/selectors/getProgress'
import { getStatus } from '../../../model/selectors/getStatus'

export const Progress: React.FunctionComponent = () => {

    const progress = useSelector(getProgress)
    const status = useSelector(getStatus)

    if (status !== 'loading') {
        return null
    }
    
    return (
        <div className={cls.progress_container}>
            <P
                progress={progress || 0}
            />
        </div>
    );
};
