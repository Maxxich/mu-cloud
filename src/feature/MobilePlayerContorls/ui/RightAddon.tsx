import { useSelector } from 'react-redux'
import { getIsPaused } from '@/entity/player';
import IconNext from '@/shared/assets/svg/Next.svg'
import IconXmark from '@/shared/assets/svg/Xmark.svg'
import { Button } from './Button/Button';

interface IRightAddonProps {
}

export const RightAddon: React.FunctionComponent<IRightAddonProps> = (props) => {

    const paused = useSelector(getIsPaused)

    const icon = paused ? <IconXmark/> : <IconNext/>

  return (
    <Button
        variant={paused ? 'primary' : 'secondary'}
    >
        {icon}
    </Button>
  );
};