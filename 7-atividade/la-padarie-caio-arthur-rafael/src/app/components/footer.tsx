"use client" 

import { styled } from "styled-components"


const TagFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 80px 0px;
    background-color:#E5CF94;
    > p {
        font-weight: 400;
        font-size: 14px;
        color: #5F3305;
    }
`

export function Footer(){
    return (
        <TagFooter>
            <p>
                Com 💛 Info Jr UFBA 2022
            </p>
        </TagFooter>
    )
}