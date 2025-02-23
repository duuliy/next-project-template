// import './utils/initRemote.js' //这样引入也可以成功嵌套打包 QAQ
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
