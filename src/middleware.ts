export { default } from 'next-auth/middleware'

export const config = {
    matcher: [
        '/upload/:path*',
        '/library/:path*',
        '/settings/:path*'
    ]
}