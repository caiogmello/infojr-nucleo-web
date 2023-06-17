"use client"

import styles from './page.module.css'
import { Queue } from './components/queue'
import { Transactions } from './components/transaction'
import { ModalComponent } from './components/modalComponent'
import { useState } from 'react'


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
      <Transactions nPessoas={6} nPaes={350} nEntrada={Number((350*0.5).toFixed(2))}/>
      <Queue openModal={openModal}/>
      {modalIsOpen && <ModalComponent cancel={closeModal} send={closeModal} />}
    </main>
  )
}
