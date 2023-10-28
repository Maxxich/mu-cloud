import { useSelector } from 'react-redux';
import { getProgress } from '@/feature/AddNewTrackSeparateImageLoading/model/selectors/getColorProgress';
import { Progress as P } from '@/shared/ui/Progress';

export const Progress: React.FunctionComponent = () => {

    const progress = useSelector(getProgress)
    
    if (!progress) return null
    
    return (
        <P
            progress={progress}
            margin='0 0 16px 0'
        />
    );
};
