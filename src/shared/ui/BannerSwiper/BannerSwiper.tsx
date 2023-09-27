import { BannerSwiperMobile } from './components/mobile/BannerSwiperMobile';
import { BannerSwiperDesktop } from './components/desktop/BannerSwiperDesktop';
import { BannerSwiperProps } from './helpers/type';
import { InterfaceSeparator } from '../InterfaceSeparator/InterfaceSeparator';

export const BannerSwiper: React.FunctionComponent<BannerSwiperProps> = ({
    children,
    ...rest
}) => {

    return <InterfaceSeparator
        desktopComponent={
            <BannerSwiperDesktop
                {...rest}
            >
                {children}
            </BannerSwiperDesktop>
        }
        mobileComponent={
            <BannerSwiperMobile
                {...rest}
            >
                {children}
            </BannerSwiperMobile>
        }
    />
};