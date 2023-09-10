import { useSelector } from 'react-redux';
import { getSelectedTrackId } from '@/entity/player';
import { TogglePause } from './TogglePause';
import { SetPreviusTrack } from './SetPreviusTrack';
import { SetNextTrack } from './SetNextTrack';
import { ToggleLike } from './ToggleLike';
import { More } from './More';
import cls from './ControlsPanel.module.scss'



interface IControlsPanelProps {

}

export const ControlsPanel: React.FunctionComponent<IControlsPanelProps> = ({}) => {

  const id = useSelector(getSelectedTrackId)

  if (!id) return null

  return (
    <div className={cls.container}>
      <ToggleLike id={id}/>
      <SetPreviusTrack/>
      <TogglePause/>
      <SetNextTrack/>
      <More/>
    </div>
  );
};