import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransectionModal } from "./components/NewTransectionModal";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewtransectionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewtransectionModal() {
        setIsNewTransactionModalOpen(false);
    }
  return (
    <>
      <Header OnRequestOpen={handleOpenNewtransectionModal}/>
      <Dashboard/>
      <NewTransectionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewtransectionModal}
      />
      <GlobalStyle />
    </>

  );
}

