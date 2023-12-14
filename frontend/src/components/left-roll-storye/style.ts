import styled from "styled-components";

export const UnList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 15px;
`;

export const Imagem = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
`;

export const Label = styled.p`
    font-size: .8em;
    color: white;
    margin-top: 5px;
`;