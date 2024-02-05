const postcssConfig = require('./postcss.config');
const nextConfig = {
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"], // <-- and this
  },
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  // and the following to enable top-level await support for Webpack
  // webpack: (config) => {
  //   config.experiments = {
  //     topLevelAwait: true
  //   };
  //   return config;
  // },
  webpack: (config, { isServer }) => {
    config.experiments = {
          topLevelAwait: true
        };
    config.resolve.alias['history'] = 'history';
    
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: postcssConfig,
          },
        },
      ],
    });

    return config;
  },
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/ACg8ocLQDjp7qnPG69Y_7ngpW5K-XGHEDnbJnQHfZeD4WubV=s96-c",
      },
    ],
  },
};
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
};
module.exports = {
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en-US",
  },
};
