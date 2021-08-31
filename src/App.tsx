import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransectionModal } from "./components/NewTransectionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./Transactions";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewtransectionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewtransectionModal() {
        setIsNewTransactionModalOpen(false);
    }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewtransectionModal}/>
      <Dashboard/>
      <NewTransectionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewtransectionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>

  );
}

