import { Form } from '@/shared/ui/Form';
import { Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import cls from './Preview.module.scss'
import { ToggleShowSquareImage } from './ToggleShowSquareImage';
import { PickColor } from './PickColor';
import { useRenderPreview } from '../../../lib/useRenderPreview';

interface IPreviewProps {
}

export const Preview: React.FunctionComponent<IPreviewProps> = (props) => {

    const { canvasRef, containerRef } = useRenderPreview()

    return <Form.Box className={cls.box} ref={containerRef}>
        <Text title size='s'>Предварительный просмотр</Text>
        <canvas ref={canvasRef} style={{
            background: '#000',
            borderRadius: 5,
            overflow: 'hidden'
        }}/>
        <HStack align='center'>
            <ToggleShowSquareImage/>
            <PickColor/>
        </HStack>
    </Form.Box>;
};
