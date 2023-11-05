// import { withAuth } from 'next-auth/middleware'

export { default } from 'next-auth/middleware'

// export default withAuth({
//     callbacks: {
//         authorized({ req, token }) {
//             return !!token
//         },
//     },
// })

export const config = { 
    matcher: [
        '/upload/:path*',
        '/library/:path*',
        '/settings/:path*'
    ]
}
