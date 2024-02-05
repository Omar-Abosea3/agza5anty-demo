/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        apiBaseUrl:'http://44.231.55.155:5000'
    },
    images: {
        domains: ['admin.tbtexperts.com' , 'ph2.tbtexperts.com' , 'ph1.tbtexperts.com'], // Add the hostname or domain here
    },
    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'http',
    //         hostname: 'admin.tbtexperts.com',
    //         // port: '',
    //         // pathname: '/account123/**',
    //       },
    //     ],
    //   },
}

module.exports = nextConfig
