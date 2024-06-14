/** @type {import('next').NextConfig} */
import {advancedHeaders} from "./advancedHeaders.mjs";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    images:{
        /* todo: verify if it's a good idea to add specific domains and paths for logos */
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            }
        ],
    },
    logging: {
        verbose: !isProd,
        fetches: {
            fullUrl: !isProd,
        },
    },
    transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
    modularizeImports: {
        "@mui/material/?(((\\w*)?/?)*)": {
            transform: "@mui/material/{{ matches.[1] }}/{{member}}",
        },
        "@mui/icons-material/?(((\\w*)?/?)*)": {
            transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
        },
    },
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: "/:path*",
                headers: advancedHeaders,
            },
        ];
    },
};

export default nextConfig;
