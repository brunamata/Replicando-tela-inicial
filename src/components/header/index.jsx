import React from 'react'
import { Button } from '../button';
import logo from '../../assets/logo-dio.png'
import {useNavigate} from "react-router-dom"
import{
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper

}from "./styles";


    

export default function Header({autenticado /* boolean */}){
    const navigate = useNavigate();
    const handleClickSignUp = () => {
        navigate('/cadastro');
    }
    return(
        <Wrapper>
            <Container>
                <Row>
                    {/* <img src={logo} alt='Logo da dio' /> */}
                    {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="" />
                     ) : (
                    <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" onClick={handleClickSignUp} type="button" />
                    </>
                    )}
                </Row>
            </Container>

        </Wrapper>
    )
}

export {Header};