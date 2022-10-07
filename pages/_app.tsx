import '../styles/globals.css'
import '../styles/Post.css'
import '../styles/RightSideBar.css'
import '../styles/LeftSideBar.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
