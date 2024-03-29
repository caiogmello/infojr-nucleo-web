import { styled } from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useTransactions } from "../context";

const TagModal = styled.section`
    padding: 30px 30px;
    position: absolute;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 347px;
    width: 605px;
    @media (max-width: 800px) {
        margin: -70px;
        width: 330px;
        height: 457px;
    }
`;

const TagInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px;
    @media (max-width: 800px) {
            align-items: center;
    }
    > h1 {
        font-weight: 700;
        font-size: 16px;
        color: #5F3305;
    }
    >div {
        display: flex;
        flex-direction: column;
        gap: 15px;

        > input {
            font-weight: 400;
            font-size: 12px;
            color: #7D7D7D;
            background-color: #F5F5F5;
            width: 545px;
            border-radius: 5px;
            border: none;
            padding: 16px 25px;
            @media (max-width: 800px) {
                width: 270px;
                height: 50px;
            }
        }
    }
`;

const TagButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 25px;
    @media (max-width: 800px) {
        flex-direction: column;
    }
    > button {
        font-weight: 600;
        font-size: 16px;
        border-radius: 5px;
        border: none;
        height: 60px;
        width: 260px;
        cursor: pointer;
    }
    > .send {
        background-color: #5F3305;
        color: #fff;
    }
    > .cancel {
        background-color: #fff;
        border: 1px solid #DB1E1E;
        color: #DB1E1E;
    }
`;

export function ModalComponent({ cancel, send }:{ cancel: () => void, send: () => void }) {
    const { setQueueData } = useTransactions();

    const handleSend = async () => {
        const name = document.getElementById("name").value;
        const breadQty = document.getElementById("breadQty").value;

        const data = {
            name: name,
            breadQty: parseInt(breadQty)
        };

        try {
            const response = await axios.post("http://localhost:3001/row/create", data);
            const getData = await axios.get("http://localhost:3001/row/stats");
            console.log(getData.data);
            console.log(response.data);
            
            setQueueData({
                    nPessoas: getData.data.rowCount,
                    nPaes: getData.data.paesVendidos,
                    nEntrada: getData.data.paesVendidos * 0.5,
                });
            send(); // Chamada da função send para atualizar o componente Queue
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        cancel();
    };

    return (
        <TagModal>
            <TagInput>
                <h1>Adicionar pessoas a fila</h1>
                <div>
                    <input type="text" id="name" placeholder="Nome completo do cliente" />
                    <input type="text" id="breadQty" placeholder="Total de pães:" />
                </div>
            </TagInput>
            <TagButton>
                <button className="send" onClick={handleSend}>
                    Enviar
                </button>
                <button className="cancel" onClick={handleCancel}>
                    Cancelar
                </button>
            </TagButton>
        </TagModal>
    );
}