"use client"

import { styled } from "styled-components"
import { Customer } from "./customer"
const TagContainer = styled.div`
    height: 100vh;
    gap: 25px;
    padding-top: 80px;
    width: 1235px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`


const TagButton = styled.button`
    
    background-color: #E5CF94;
    color: #5F3305;
    font-weight: 700;
    font-size: 16px;
    border: none;
    cursor: pointer;
`

export function Queue() {

    return (
        <TagContainer>
            <TagButton>
                + Adicionar pessoa a fila
            </TagButton>
            <Customer/>
        </TagContainer>
    )
}