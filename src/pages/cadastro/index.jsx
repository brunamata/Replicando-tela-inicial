import {useNavigate} from "react-router-dom"
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

import{Container, TextContent, Title, Column, 
JaTemText, CriarText, Row, SubTitleLogin, TitleLogin, Wrapper, Espacamento} from './styles';


const Cadastro = () => {
    const navigate = useNavigate();
    const handleClickSignUp = () => {
        navigate('/login');
    }    
    const handleClickSignIn = () => {
        navigate('/feed');
    }
  return (
    <>
        <Header/>
        <Container>
            <Column>
                <Title>A plataforma pra você aprender com experts
                    , dominar as principais tecnologias e entrar mais 
                    rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <TitleLogin>Cadastre-se agora!</TitleLogin>
                <SubTitleLogin>Crie sua conta agora e make the change._</SubTitleLogin>
                <Input placeholder="Nome Completo"/>
                <Input placeholder="E-mail"/>
                <Input placeholder="Senha" type="password"/>
                <Button title="Criar minha conta grátis!" variant="secondary" onClick={handleClickSignIn}></Button>
                <TextContent>Ao clicar em "criar minha
                    conta grátis", declaro que aceito as Políticas
                    de Privacidade e os Termos de Uso.
                </TextContent>
                <Row>
                    <JaTemText>Já tenho conta:  </JaTemText>
                    <Espacamento>o</Espacamento>
                    <CriarText type="button" onClick = {handleClickSignUp}>Fazer Login</CriarText>

                </Row>
            </Column>
        </Container>
    </>
  )
}

export {Cadastro};