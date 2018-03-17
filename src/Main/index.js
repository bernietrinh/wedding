import { Background, Parallax } from 'react-parallax'
import React, { Fragment } from 'react'

import Form from '../Form'
import hero from './hero.jpg'
import styled from 'styled-components'

const Main = () => {
    return (
        <Fragment>
            <MainWrapper>
                <Content>
                    <H1>M|B</H1>
                    <Name>MANDY FOK</Name>
                    <CursiveSpan>and</CursiveSpan>
                    <Name>BERNIE TRINH</Name>
                     <CursiveH3>August Fifth Two Thousand Eighteen</CursiveH3>   

                    <Button>JOIN US</Button>
                </Content>
            </MainWrapper>
            <Form />
        </Fragment>

    )
}

const Button = styled.button`
    margin: 30px 0 20px 0;
    cursor: pointer;
    background: none;
    padding: 10px 40px;
    border: 2px solid black;
`

const MainWrapper = styled.div`
    min-height: 800px;
    padding: 35px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid black;
    width: 100%;
    height: 100%;
    padding: 40px;
`

const H1 = styled.h1`
    font-size: 64px;
`

const CursiveSpan = styled.span`
    font-family: 'Pinyon Script', cursive;
    font-size: 24px;
`

const Name = styled.h2`
    font-size: 48px;
    letter-spacing: 5px;
`

const CursiveH3 = styled.h3`
    font-size: 36px;
    font-family: 'Pinyon Script', cursive;
    letter-spacing: 5px;
`

export default Main
