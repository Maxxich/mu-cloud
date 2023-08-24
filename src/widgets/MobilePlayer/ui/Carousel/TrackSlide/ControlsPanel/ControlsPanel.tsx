import { TogglePause } from './TogglePause';
import { SetPreviusTrack } from './SetPreviusTrack';
import { SetNextTrack } from './SetNextTrack';
import { ToggleLike } from './ToggleLike';
import { More } from './More';
import cls from './ControlsPanel.module.scss'



interface IControlsPanelProps {

}

export const ControlsPanel: React.FunctionComponent<IControlsPanelProps> = ({}) => {



  return (
    <div className={cls.container}>
      <ToggleLike />
      <SetPreviusTrack/>
      <TogglePause/>
      <SetNextTrack/>
      <More/>
    </div>
  );
};