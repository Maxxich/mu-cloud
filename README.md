Проект построен на [Next.js](https://nextjs.org/)

## Запуск проекта

```
npm run dev - запуск проекта в dev режиме
```

## Скрипты

- `npm run dev` - Запуск в dev режиме
- `npm run start` - Запуск в prod режиме
- `npm run build` - Сборка в prod режиме

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером

- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

- `npm run test:unit` - Запуск unit тестов с jest

- `npm run test:ui:init` - Инициализация скриншотных тестов с loki
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:report` - Генерация отчета для скриншотных тестов

- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда

- `npm run prepare` - инициализация прекоммит хуков

- `npm run postinstall` - очистка кэша после установки зависимостей (запускаяется автоматически)
----
- `generate:slice layer sliceName` - создание слайса по методологии Feature Sliced Design.
Cлои (layers): `feature`, `entity`, `page`

## Тесты

В проекте используются 3 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

## Pre commit хуки

В прекоммит хуках проект проеверяется линтерами (конфигурация в /.husky)


----
## Shared

- [BannerSwiper](/src/shared/ui/BannerSwiper)
- [Button](/src/shared/ui/Button)
- [Choose](/src/shared/ui/Choose)
- [CropImage](/src/shared/ui/CropImage)
- [Dialog](/src/shared/ui/Dialog)
- [FileInput](/src/shared/ui/FileInput)
- [Form](/src/shared/ui/Form)
- [IconButton](/src/shared/ui/IconButton)
- [Image](/src/shared/ui/Image)
- [Input](/src/shared/ui/Input)
- [ItemsSection](/src/shared/ui/ItemsSection)
- [ItemsTitle](/src/shared/ui/ItemsTitle)
- [Loader](/src/shared/ui/Loader)
- [Logo](/src/shared/ui/Logo)
- [Menu](/src/shared/ui/Menu)
- [MobileMenu](/src/shared/ui/MobileMenu)
- [PageContainer](/src/shared/ui/PageContainer)
- [RequireAuthDialog](/src/shared/ui/RequireAuthDialog)
- [Skeleton](/src/shared/ui/Skeleton)
- [Stack](/src/shared/ui/Stack)
- [Text](/src/shared/ui/Text)
- [Tooltip](/src/shared/ui/Tooltip)


## Сущности (entities)

- [fileStorage](/src/entity/fileStorage)
- [player](/src/entity/player)
- [track](/src/entity/track)
- [user](/src/entity/user)
- [viewer](/src/entity/viewer)

## Фичи (features)

- [AddNewTrack](/src/feature/AddNewTrack)
- [AddNewTrackSeparateImageLoading](/src/feature/AddNewTrackSeparateImageLoading)
- [ConfirmEmail](/src/feature/ConfirmEmail)
- [CropImage](/src/feature/CropImage)
- [ConfirmEmailWarningDialog](/src/feature/ConfirmEmailWarningDialog)
- [ConfirmResetPassword](/src/feature/ConfirmResetPassword)
- [DesktopVisualizer](/src/feature/DesktopVisualizer)
- [EditProfile](/src/feature/EditProfile)
- [RemoveProfile](/src/feature/RemoveProfile)
- [ResetPassword](/src/feature/ResetPassword)
- [SignIn](/src/feature/SignIn)
- [SignUp](/src/feature/SignUp)
- [TimeLine](/src/feature/TimeLine)
- [Toast](/src/feature/Toast)
- [Track](/src/feature/Track)


## Виджеты (widgets)

- [DesktopPlayer](/src/widgets/DesktopPlayer)
- [MobilePlayer](/src/widgets/MobilePlayer)
- [MobilePlayerContorls](/src/widgets/MobilePlayerContorls)
- [Navbar](/src/widgets/Navbar)
- [Pagination](/src/widgets/Pagination)
- [UserHeader](/src/widgets/UserHeader)


## Evironment переменные (.env.local)

- NEXTAUTH_URL
- NEXTAUTH_SECRET
- NEXT_PUBLIC_STANDART_PER_PAGE
- BACKEND_URL
- FRONTEND_URL