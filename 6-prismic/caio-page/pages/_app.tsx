import type { AppProps } from 'next/app'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicPreview repositoryName={repositoryName}>
      <Component {...pageProps} />
    </PrismicPreview>
  )
}
