
import {useNavigate} from "react-router-dom"
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

import{Container, TextContent, Title, Column, 
CriarText, EsqueciText, Row, SubTitleLogin, TitleLogin, Wrapper} from './styles';


const Login = () => {
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/feed');
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form>
                        <Input placeholder="E-mail"/>
                        <Input placeholder="Senha" type="password"/>
                        <Button title="Entrar" variant="secondary"  onClick={handleClickSignIn} type="button"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>

     ) 
} 

export {Login};