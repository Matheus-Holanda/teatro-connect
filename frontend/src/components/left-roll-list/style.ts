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
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    margin-bottom: .5em;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: .5em .8em;
    border-radius: 1em;
    margin-right: 1.5em;
    background-color: #2A3176;
    color: white;
    white-space: nowrap;
    word-wrap: unset;
    word-break: keep-all;
`;