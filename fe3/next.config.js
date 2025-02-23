// const path = require('path')
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
    //     name: "fe3",
    //     // filename: 'static/runtime/consumerFile.js',
    //     // filename: 'static/runtime/remoteEntry.js',
    //     // remoteType: "var",
    //     remotes: {
    //       // fe1: options.isServer ? path.resolve(__dirname, '../fe1/.next/static/runtime/remoteEntry.js') : 'fe1',
    //       // fe2: options.isServer ? path.resolve(__dirname, '../fe2/.next/static/runtime/remoteEntry_2.js') : 'fe2',
    //       fe1: 'fe1@http://localhost:3000/_next/static/runtime/remoteEntry.js',
    //       fe2: 'fe2@http://localhost:3001/_next/static/runtime/remoteEntry2.js',
    //       //这里只能结合webpack5联邦模块的exposes导出的remoteEntry ，如果用chunks自身打包的文件则无法找到路径
    //       //在next的ssr中对模块的访问分为：1.加载模块（异步）2.评估模块（同步）。
    //       // fe1: 'fe1@http://localhost:3000/_next/static/chunks/component_Header_jsx.js',
    //       // fe2: 'fe2@http://localhost:3001/_next/static/chunks/src_utils_getSquareRoot_js.js',
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
          name: "fe3",
            filename: 'static/runtime/remoteEntry3.js', //这个参数必传，或者这里用options.webpack.container.ModuleFederationPlugin都可以实现嵌套打包
          remotes: {
              fe1: 'fe1@http://localhost:3000/_next/static/runtime/remoteEntry.js',
              fe2: "fe2@http://localhost:3001/_next/static/runtime/remoteEntry2.js"
          },
          shared: [
            {
              react: {
                eager: true,
                singleton: true,
                requiredVersion: false
              }
            },
            {
              "react-dom": {
                eager: true,
                singleton: true,
                requiredVersion: false
              }
            }
          ]
        })
    )
    if (!options.isServer) {
      config.output.publicPath = 'http://localhost:3002/_next/'
    }
    // config.experiments = { topLevelAwait: true } // 支持顶层await
    return config
  }
}

module.exports = nextConfig
