import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    margin: 15px auto;
    width: 85%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: .6em;
    padding: .6em .4em;
    background-color: rgba(250, 250, 250, .15);
    color: white;
`;

export const Imagem = styled.img`
    border-radius: .5em;
    width: 115px;
    height: 110px;
`;

export const Informacoes = styled.section`
    display: flex;
    flex-direction: column;

    h1{
        margin: 0;
        font-size: 1.2em;
    }

    div{
        display: flex;
        flex-direction: row;
        gap: 1em;
    }
`;