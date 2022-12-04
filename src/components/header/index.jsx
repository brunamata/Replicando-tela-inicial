import React from 'react'
import { Button } from '../button';
import logo from '../../assets/logo-dio.png'
import{
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper

}from "./styles";

export default function Header(){
    return(
        <Wrapper>
            <Container>
                <Row>
                    {/* <img src={logo} alt='Logo da dio' /> */}
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="a">Home</MenuRight>
                </Row>
            </Container>

        </Wrapper>
    )
}

export {Header};