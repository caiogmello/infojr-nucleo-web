"use client"

import styles from './page.module.css'
import { Queue } from './components/queue'
import { Transactions } from './components/transaction'
import { ModalComponent } from './components/modalComponent'
import { useState } from 'react'
import { TransactionsProvider } from './context';

export default function Home() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
      setModalIsOpen(true);
  }

  function closeModal() {
      setModalIsOpen(false);
  }

  return (
    <main className={styles.main}>
      <TransactionsProvider>
        <Transactions />
        <Queue openModal={openModal} />
      </TransactionsProvider>
    </main>
  )
}