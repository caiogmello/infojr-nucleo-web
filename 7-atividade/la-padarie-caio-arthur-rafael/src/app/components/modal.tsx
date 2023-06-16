"use client"
import { styled } from "styled-components"

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
`
const TagInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px;
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
    }
`

const TagButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 25px;
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
`
export function Modal(){
    return (
        <TagModal>
            <TagInput>
                <h1>Adicionar pessoas a fila</h1>
                <div>
                    <input type="text" placeholder="Nome completo do cliente" />
                    <input type="text" placeholder="Total de pães:"/>
                </div>
            </TagInput>
            <TagButton>
                <button className="send">Enviar</button>
                <button className="cancel">Cancelar</button>
            </TagButton>
        </TagModal>
    )
}