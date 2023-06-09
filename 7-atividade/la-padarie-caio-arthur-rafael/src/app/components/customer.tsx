import Image from "next/image";
import Delete from "../../../public/Delete.svg";
import { styled } from "styled-components";

const TagCustomer = styled.section`
    width: 100%;
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #5F3305;
    padding: 15px 25px 15px 15px;
    > button {
        border: none;
        cursor: pointer;
        background-color: transparent;
    }
`;

const TagInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5px;
    > h1 {
        font-weight: 700;
        font-size: 16px;
    }
    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 15px;
        > p {
            font-weight: 400;
            font-size: 12px;
        }
        @media (max-width: 800px) {
            flex-direction: column;
            gap: 5px;
        }
    }
`;

export function Customer({ nome, paes, id, onDelete }: { nome: string; paes: number; id: number; onDelete: (id: number) => void }) {
    const handleDelete = () => {
        onDelete(id); // Chamar a função onDelete passando o ID do cliente
    };

    return (
        <TagCustomer>
            <TagInfo>
                <h1>{nome}</h1>
                <div>
                    <p><b>Total de pães</b> {paes}</p>
                    <p><b>Total a pagar</b> R$ {paes * 0.5}</p>
                </div>
            </TagInfo>
            <button onClick={handleDelete}>
                <Image src={Delete} alt="Trash button" />
            </button>
        </TagCustomer>
    );
}
