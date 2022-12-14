import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const Title= styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;

    color: #ffffff;
`

export const TitleHighLight = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 24px;
    line-height: 25px;

    color: #ffffff;

`

export const Column = styled.div`
    flex:${({flex}) => flex};
    padding-right: 24px;
`