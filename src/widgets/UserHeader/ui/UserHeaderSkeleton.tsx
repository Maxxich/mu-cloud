
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './UserHeaderSkeleton.module.scss'

export const UserHeaderSkeleton: React.FunctionComponent<{
    isMobile: boolean
}> = ({
    isMobile,
}) => {

    if (isMobile) return (
        <VStack gap='8' className={cls.mobileVStack}>
            <Skeleton height={375} width={'100%'} borderRadius='10px'/>
            <Skeleton height={24} width={'40%'} borderRadius='5px'/>
        </VStack>
    )
    
    return <HStack className={cls.mobileHStack}>
        <Skeleton height={200} width={200} borderRadius='18px'/>
        <Skeleton height={69} width={305} borderRadius='5px'/>
    </HStack>
};

