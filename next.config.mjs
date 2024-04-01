/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'images.pexels.com'
            },

            {
                protocol:'https',
                hostname:'media.istockphoto.com'
            },

            {
                protocol:'https',
                hostname:'i.pinimg.com'
            },
            {
                protocol:'https',
                hostname:'avatars.githubusercontent.com'
            }



        ]
    }
};

export default nextConfig;
