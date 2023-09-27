'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Pagination as HeadlessPagination } from 'react-headless-pagination';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import IconPrevius from '@/shared/assets/svg/Previus.svg'
import IconNext from '@/shared/assets/svg/Next.svg'
import cls from './Pagination.module.scss'

interface IPaginationProps {
    total: number
}

export const Pagination: React.FunctionComponent<IPaginationProps> = ({
    total
}) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '5'
    const search = searchParams.get('search') ?? ''
    const totalPages = Math.ceil(total/Number(per_page))

    const onNextPage = () => router.push(
        pathname + `?page=${Number(page) + 1}&per_page=${per_page}&search=${search}`
    )

    const onPreviusPage = () => router.push(
        pathname + `?page=${Number(page) - 1}&per_page=${per_page}&search=${search}`
    )

    const onChange = (value: number) => router.push(
        pathname + `?page=${value + 1}&per_page=${per_page}&search=${search}`
    )

    const hasPreviusPage = Number(page) > 1
    const hasNextPage = Number(page) < totalPages

    return (
        <HeadlessPagination
            currentPage={Number(page) - 1}
            setCurrentPage={onChange}
            className={cls.conatiner}
            edgePageCount={1}
            middlePagesSiblingCount={2}
            totalPages={totalPages}
        >
            <IconButton 
                onClick={onPreviusPage} 
                disabled={!hasPreviusPage}
                icon={<IconPrevius/>}
            />
            <nav className={cls.nav}>
                <ul className={cls.ul}>
                    <HeadlessPagination.PageButton
                        activeClassName={cls.acitvePage}
                        inactiveClassName=""
                        className={cls.page}
                    />
                </ul>
            </nav>
            <IconButton 
                onClick={onNextPage} 
                disabled={!hasNextPage}
                icon={<IconNext/>}
            />
        </HeadlessPagination>
    )
}
