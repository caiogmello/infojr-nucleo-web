import React, { createContext, useState, useContext } from 'react';

const TransactionsContext = createContext();

export function useTransactions() {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionsProvider');
  }
  return context;
}

export function TransactionsProvider({ children }) {
  const [queueData, setQueueData] = useState({
    nPessoas: 0,
    nPaes: 0,
    nEntrada: 0,
  });

  return (
    <TransactionsContext.Provider value={{ queueData, setQueueData }}>
      {children}
    </TransactionsContext.Provider>
  );
}
