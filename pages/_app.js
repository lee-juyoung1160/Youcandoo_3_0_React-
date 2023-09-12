import '../styles/globals.scss'

function YouCanDoo({Component, pageProps}) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
export default YouCanDoo
