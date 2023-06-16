import Image from 'next/image'
import styles from './page.module.css'
import styled from 'styled-components'
import { Queue } from './components/queue'
import { Transactions } from './components/transaction'
import { Modal } from './components/modal'
export default function Home() {
  return (
    <main className={styles.main}>
      <Transactions/>
      <Queue/>
      <Modal/>
    </main>
  )
}
