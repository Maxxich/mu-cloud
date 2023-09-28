import { BannerSwiperMobile } from './components/mobile/BannerSwiperMobile';
import { BannerSwiperDesktop } from './components/desktop/BannerSwiperDesktop';
import { BannerSwiperProps } from './helpers/type';

export const BannerSwiper: React.FunctionComponent<BannerSwiperProps & {
    isMobile: boolean
}> = ({
    children,
    isMobile,
    ...rest
}) => {

    if (isMobile) return (
        <BannerSwiperMobile
            {...rest}
        >
            {children}
        </BannerSwiperMobile>
    )
    return (
        <BannerSwiperDesktop
            {...rest}
        >
            {children}
        </BannerSwiperDesktop>
    )
}
