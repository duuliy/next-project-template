const NextFederationPlugin = require('@module-federation/nextjs-mf')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true, // Need to make it true for some versions of Next JS
  // distDir: 'build', // Defined build directory
  webpack: (config, options) => { // webpack configurations
    // config.plugins.push(
    //   new options.webpack.container.ModuleFederationPlugin({
    //     name: "fe1",
    //     // library: { type: config.output.libraryTarget, name:"fe1"},
    //     filename: "static/runtime/remoteEntry.js", // remote file name which will used later
    //     // remoteType: "var",
    //     exposes: { // expose all component here.
    //       "./header": "./component/Header"
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
          name: 'fe1',
          filename: 'static/runtime/remoteEntry.js',
          exposes: {
              "./header": "./component/Header"
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
    if (!options.isServer){
      config.output.publicPath = 'http://localhost:3000/_next/'
    }
    return config
  }
}

module.exports = nextConfig
