const NextFederationPlugin = require('@module-federation/nextjs-mf')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  // distDir: 'build',
  webpack: (config, options) => {
    // config.plugins.push(
    //   new options.webpack.container.ModuleFederationPlugin({
    //     name: "fe2",
    //       remotes: {
    //         fe1: 'fe1@http://localhost:3000/_next/static/runtime/remoteEntry.js',
    //       },
    //     // library: { type: config.output.libraryTarget, name: "fe2" }, //这个貌似没起作用
    //     filename: "static/runtime/remoteEntry2.js",
    //     // remoteType: "var",
    //     exposes: {
    //       // "./squareRoot": "./src/utils/getSquareRoot.js"
    //         "./headerWrap": "./component/HeaderWrap"
    //     },
    //     shared: [
    //       {
    //         react: {
    //           eager: true,
    //           singleton: true,
    //           requiredVersion: false,
    //         }
    //       },
    //       {
    //         "react-dom": {
    //           eager: true,
    //           singleton: true,
    //           requiredVersion: false,
    //         }
    //       },
    //     ]
    //   })
    // )
      config.plugins.push(
          new NextFederationPlugin({
              name: 'fe2',
              filename: 'static/runtime/remoteEntry2.js',
              remotes: {
                  fe1: 'fe1@http://localhost:3000/_next/static/runtime/remoteEntry.js',
              },
              exposes: {
                  "./headerWrap": "./component/HeaderWrap"
              },
              shared: [
                  {
                      react: {
                          eager: true,
                          singleton: true,
                          requiredVersion: false,
                      }
                  },
                  {
                      "react-dom": {
                          eager: true,
                          singleton: true,
                          requiredVersion: false,
                      }
                  },
              ]
          }),
      )
    if (!options.isServer) {
      config.output.publicPath = 'http://localhost:3001/_next/' //这个貌似没起作用
    }
    return config
  }
}

module.exports = nextConfig
