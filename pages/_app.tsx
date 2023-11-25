import localFont from '@next/font/local'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './Geist-Regular.otf' })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}