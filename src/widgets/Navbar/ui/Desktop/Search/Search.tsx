'use client'

import { ChangeEvent, FormEvent, memo, useCallback, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import { Input } from '@/shared/ui/Input/Input';
import IconSearch from '@/shared/assets/svg/Loupe.svg'
import cls from './Search.module.scss'

interface ISearchProps {
}

export const Search: React.FunctionComponent<ISearchProps> = memo((props) => {

    const searchParams = useSearchParams()
    const [search, setSearch] = useState<string>(searchParams.get('search') ?? '')
    const router = useRouter()

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }, [])

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!search.trim()) return
        router.push(`/search?search=${search.trim()}`)
    }, [search, router])

    return (
        <form onSubmit={onSubmit}>
            <Input
                addonRight={<IconButton
                    icon={<IconSearch/>}
                    type='submit'
                    size='xs'
                />}
                value={search}
                onChange={onChange}
                className={cls.input_margin}
            />
        </form>
    )
})

Search.displayName = 'Search'