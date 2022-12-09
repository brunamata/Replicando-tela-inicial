import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #ffff;
    padding: 2px 12px;
    min-width: 120px;
    width: 90%;

    ${({variant})=> variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #E41050;

        &:hover{
            /* opacity: 0.6; */
            background-color: #008000;
            cursor: pointer;
        }

        &::after{
            content: '';
            position: absolute;
            border: 1px solid #e41050;
            top: -3px;
            left: -4px;
            width: calc(100% + 6px);
            height: calc(100% + 4px);
            border-radius: 22px;
        }
    `}

`


    


