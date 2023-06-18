import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { Customer } from "./customer";
import { ModalComponent } from "./modalComponent";

const TagContainer = styled.div`
    height: 100%;
    gap: 25px;
    padding-top: 80px;
    width: 1235px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 1250px) {
        width: 800px;
    }
    @media (max-width: 800px) {
       width: 330px;
    }
`;

const TagButton = styled.button`
    background-color: #E5CF94;
    color: #5F3305;
    font-weight: 700;
    font-size: 16px;
    border: none;
    cursor: pointer;
`;

export function Queue({ openModal }: { openModal: () => void }) {
    const [customers, setCustomers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/row");
            setCustomers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3001/row/delete/${id}`);

            if (response.status === 200) {
                console.log('Registro deletado com sucesso');
                fetchData();
            } else {
                console.error('Erro ao deletar o registro');
            }
        } catch (error) {
            console.error('Erro ao deletar o registro', error);
        }
    };

    const handleSend = async () => {
        fetchData(); // Atualizar os dados após o envio
        closeModal();
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <TagContainer>
            <TagButton onClick={() => setModalOpen(true)}>
                + Adicionar pessoa à fila
            </TagButton>
            {customers.map((customer) => (
                <Customer
                    key={customer.id}
                    id={customer.id}
                    nome={customer.name}
                    paes={customer.breadQty}
                    onDelete={handleDelete}
                />
            ))}
            {modalOpen && <ModalComponent cancel={closeModal} send={handleSend} />}
        </TagContainer>
    );
}
