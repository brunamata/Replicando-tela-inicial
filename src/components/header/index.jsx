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
                        <UserPicture src="data:image/jpeg;base64,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" />
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