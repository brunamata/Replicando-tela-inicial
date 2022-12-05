
import {Link} from "react-router-dom"
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Card } from "../../components/card";
import { UserInfo } from "../../components/userInfo";

import{Container, Column, Title, TitleHighLight} from './styles';


const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={1}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>

            {/* coluna do ranking */}
            <Column flex={5}>
                <TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
                {/* Passa os parametros para o componente do user info: */}
                <UserInfo percentual={35} nome="Pablo Henrique" image="projeto\src\assets\foto-perfil.png" />
                <UserInfo percentual={80} nome="Pablo Henrique" image="projeto\src\assets\foto-perfil.png" />
                <UserInfo percentual={67} nome="Pablo Henrique" image="projeto\src\assets\foto-perfil.png" />
                <UserInfo percentual={10} nome="Pablo Henrique" image="projeto\src\assets\foto-perfil.png" />
                <UserInfo percentual={45} nome="Pablo Henrique" image="projeto\src\assets\foto-perfil.png" />

            </Column>
        </Container>
    </>

     ) 
} 

export {Feed};