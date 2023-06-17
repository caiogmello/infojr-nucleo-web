"use client"

import { styled } from "styled-components"
import { Customer } from "./customer"



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
`


const TagButton = styled.button`
    
    background-color: #E5CF94;
    color: #5F3305;
    font-weight: 700;
    font-size: 16px;
    border: none;
    cursor: pointer;
`

export function Queue({openModal}: {openModal: () => void}) {    
    return (    
        <TagContainer>
            <TagButton onClick={openModal}>
                + Adicionar pessoa a fila
            </TagButton>
            <Customer nome="Caio Gomes de Mello" paes={90}/>
            <Customer nome="Seilá da Silva Santos" paes={10}/>
            <Customer nome="Anna Beatriz Trípodi" paes={10}/>
            <Customer nome="Lionel Messi" paes={18}/>
            <Customer nome="Caio Gomes de Mello" paes={90}/>
            <Customer nome="Caio Gomes de Mello" paes={90}/>
            <Customer nome="Caio Gomes de Mello" paes={90}/>
            <Customer nome="Caio Gomes de Mello" paes={90}/>
            <Customer nome="Caio Gomes de Mello" paes={90}/>
            <Customer nome="Caio Gomes de Mello" paes={90}/>
            <Customer nome="Caio Gomes de Mello" paes={90}/>
        </TagContainer>
    )
}