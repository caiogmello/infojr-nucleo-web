"use client"

import { styled } from "styled-components"
import pessoas from "../../../public/Pessoas.svg"
import Image from "next/image"
import carrinho from "../../../public/Carrinho.svg"
import vendas from "../../../public/Vendas.svg"

const TagContainer = styled.div`
    display: flex;
    width: 395px;
    min-height: 136px;
    background-color: #ffffff;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-between;
    > div {
        padding: 20px 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        > h3 {
            font-weight: 400;
            font-size: 16px;
        }
    }
    > h1 {
        padding: 18px 25px;
        font-weight: 500;
        font-size: 36px;
    }

    @media (max-width: 1250px) {
       width: 250px;
       height: 100px;
         > h1 {
            font-size: 28px;
         }
    }

    @media (max-width: 800px) {
       width: 330px;
         > h1 {
            padding: 10px 25px;
            font-size: 36px;
         }
    }

`

const TagEntrada = styled.div`
    display: flex;
    width: 395px;
    min-height: 136px;
    background-color:#5F3305;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-between;
    > div {
        padding: 20px 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;    
        > h3 {
            color: #ffffff;
            font-weight: 400;
            font-size: 16px;
        }
    }
    > h1 {
        padding: 18px 25px; 
        color: #ffffff;
        font-weight: 500;
        font-size: 36px;
    }

    @media (max-width: 1250px) {
       width: 250px;
       height: 100px;
         > h1 {
            font-size: 28px;
         }
    }


    @media (max-width: 800px) {
       width: 330px;
        > h1 {
            padding: 10px 25px;
            font-size: 36px;
         }
    }
`
const TagTransactions = styled.section`
    margin-top: -70px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25px;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export function Transactions() {
    return (
        <TagTransactions>
            <Pessoas/>
            <Paes/>
            <Entrada/>
        </TagTransactions>
    )
}

export function Pessoas() {
    return (
        <TagContainer>
            <div>
                <h3>Pessoas na fila</h3>
                <Image src = {pessoas} alt = "pessoas"></Image>
            </div>
            <h1>6</h1>
        </TagContainer>
    )
}

export function Paes() {
    return (
        <TagContainer>
            <div>
                <h3>Pães vendidos</h3>
                <Image src = {carrinho} alt = "pessoas"></Image>
            </div>
            <h1>350</h1>
        </TagContainer>
    )
}

export function Entrada() {
    return (
        <TagEntrada>
            <div>
                <h3>Entrada</h3>
                <Image src = {vendas} alt = "Cifrão"></Image>
            </div>
            <h1>R$ 175,00</h1>
        </TagEntrada>
    )
}



