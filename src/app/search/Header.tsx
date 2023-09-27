import { Text } from '@/shared/ui/Text/Text';
import { Search } from '@/widgets/Navbar/ui/Desktop/Search/Search';
import { InterfaceSeparator } from '@/shared/ui/InterfaceSeparator/InterfaceSeparator';

interface IHeaderProps {
    search: string
}

export const Header: React.FunctionComponent<IHeaderProps> = ({
    search
}) => {

    return <InterfaceSeparator
        desktopComponent={
            <>
                {/* @ts-ignore */}
                <Text title size='m' bold>
                    Результаты поиска по запросу &quot;{search}&quot;
                </Text>
            </>
        }
        mobileComponent={
            <div style={{ padding: '20px 0 0 0' }}>
                <Text title size='m' bold>Поиск</Text>
                <Search/>
            </div>
        }
    />
};