import { Text } from '@/shared/ui/Text';
import { Search } from '@/widgets/Navbar/ui/Desktop/Search/Search';

interface IHeaderProps {
    search: string
    isMobile: boolean
}

export const Header: React.FunctionComponent<IHeaderProps> = ({
    search,
    isMobile
}) => {
    if (isMobile) return (
        <div style={{ padding: '20px 0 0 0' }}>
            <Text title size='m' bold>Поиск</Text>
            <Search/>
        </div>
    )
    return (
        <>
            {/* @ts-ignore */}
            <Text title size='m' bold>
                Результаты поиска по запросу &quot;{search}&quot;
            </Text>
        </>
    )
};