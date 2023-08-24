import { useSelector } from 'react-redux';
import { getSelectedTrack } from '@/entity/player';
import cls from './Info.module.scss'

interface  InfoProps {
}

export const Info: React.FunctionComponent< InfoProps> = (props) => {

const track = useSelector(getSelectedTrack)

  return (
    <div className={cls.container}>
      <span className={cls.track_name}>{track!.name}</span>
      <span className={cls.author_name}>{track!.owners[0].name}</span>
    </div>
  );
};