import Image from 'next/image'
import styles from './page.module.css'
import styled from 'styled-components'
import { Transactions } from './components/transaction'
export default function Home() {
  return (
    <main className={styles.main}>
      <Transactions/>
    </main>
  )
}
