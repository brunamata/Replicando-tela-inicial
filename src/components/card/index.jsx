import React from 'react'
/* import {FiThunbsUp} from 'react-icons/fi' */

import{
    CardContainer,
    Content,
    MaisInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card =  () => {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <UserInfo>
                <UserPicture src="projeto\src\assets\foto-perfil.png"/>
                    <div>
                        <h4>Pablo Henrique</h4>
                        <p>Há 8 minutos</p>
                    </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp dio<strong>Saiba Mais</strong></p>
            </PostInfo>
            <MaisInfo>
                <h4>#HTML #CSS #JAVASCRIPT</h4>
                <p>
                    {/* <FiThunbsUp /> */} 10
                </p>
            </MaisInfo>
        </Content>

    </CardContainer>
  )
}

export{Card};
