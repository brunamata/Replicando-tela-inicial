import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 40px;

    display: flelx;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const TextContent= styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    width: 280px;
    margin-bottom: 25px;
    line-height: 25px;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    fles: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: 0;
    align-items: center;
    margin-top: 20px;
`

export const Title= styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margim-bottom: 20px;
    line-height: 44px;

    color: #ffffff;
`

export const TitleLogin= styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 15px;
    line-height: 44px;
`

export const SubTitleLogin= styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 320px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const CriarText= styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 5px;

    color: #90ee90;

    &:hover{
        opacity: 0.6;
        cursor:pointer;
    }
`

export const JaTemText= styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 5px;

    color: #ffffff;
`

export const Espacamento= styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 5px;

    color: #1e192c;
`