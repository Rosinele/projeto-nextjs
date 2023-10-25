module.exports = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/plantas',
                destination: '/especies',
                permanent: true,
            },
        ]
    },
}