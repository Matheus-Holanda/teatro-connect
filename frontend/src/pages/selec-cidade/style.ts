import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Lista = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-top: 2em;
`;

interface iItemProps {
    ativa?: boolean;
}

export const Item = styled.li<iItemProps>`
    padding: .3em;
    margin-bottom: .1em;
    background-color: ${props => props.ativa ? '#242770' : '#131745'};
    color: white;
    font-size: 1.2em;
`