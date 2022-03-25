import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { TransactionContext } from "../../TransactionsContext";
import { Container, RadioBox, TranscationTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose,}: NewTransactionModalProps) {
  const {createTransaction} = useContext(TransactionContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] =  useState('default');

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    await createTransaction({title, amount, category, type});
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('default');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
        <input placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))} type="number" />
        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
        <TranscationTypeContainer>
          <RadioBox type="button" onClick={() => setType('deposit')} isActive={type === 'deposit'} activeColor="green">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type="button" onClick={() => setType('withdraw')} isActive={type === 'withdraw'} activeColor="red">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TranscationTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
