import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      {/* 这里引入第三方或者static */}
      {/* 这里必须再次利用localhost+端口引入，否则会在本3002端口去寻找以下文件而报错404 */}
      {/*  如果这里使用@module-federation/nextjs-mf 则这里不需要引入也能成功*/}
      <script src="http://localhost:3000/_next/static/chunks/component_Header_jsx.js" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}