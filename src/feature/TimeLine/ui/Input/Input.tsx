import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useAudio } from '@/shared/lib/useAudio/useAudio';
import { getCurrentTrackTime, getCurrentTrackTimeLenght } from '@/entity/player';
import cls from './Input.module.scss'


interface IInputProps {
  variant: 'mobile' | 'desktop'
}

export const Input: React.FunctionComponent<IInputProps> = ({
  variant
}) => {

  const audio = useAudio()
  const currentTrackTime = useSelector(getCurrentTrackTime)
  const currentTrackTimeLenght = useSelector(getCurrentTrackTimeLenght)

  const [isDrag, setDrag] = useState<boolean>(false)
  const [time, setTime] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (isDrag) return
    setTime(currentTrackTime)
  }, [currentTrackTime, isDrag])

  const onStartDrag = useCallback(() => {
    setDrag(true)
  }, [])

  const onChangeCurrentTime = useCallback(() => {
    setDrag(false)
    if (!time && time !== 0) return 
    audio.currentTime = time
  }, [audio, time])

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTime(Number(e.target.value))
  }, [])

  return (
    <input 
      className={classNames(cls.input, cls[variant])}
      type={'range'}
      min={0}
      max={currentTrackTimeLenght}
      value={time}
      onMouseDown={onStartDrag}
      onMouseUp={onChangeCurrentTime}
      onTouchStart={onStartDrag}
      onTouchEnd={onChangeCurrentTime}
      onChange={onChange}
    />
  );
};

