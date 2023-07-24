"use client"

import styled from "styled-components"
import Image from "next/image"
import logo from "../../../public/Logo.svg"

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
    background-color:#965A1B;
    height: 374px;
`

export function Header(props: HeaderProps) {
    return (
        <TagHeader>
            <Image src={logo} alt="Logo"/>
        </TagHeader>
    )
}