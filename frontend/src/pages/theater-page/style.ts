import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DetailCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    padding: 1em;
    border-radius: 1em;
    background-color: rgba(250, 250, 250, .15);
    color: white;
`;

export const UpperCardZone = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: .5em;
`;

export const Image = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 1em;
    margin-right: 1.5em;
`;

export const InfoZone = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const ColumnZone = styled.div`
    h2{
        margin: 0 0 15px 0;
        padding: 0;
        font-size: .8em;
    }

    div{
        margin: 0 0 15px 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const YellowBtn = styled.button`
    width: 95%;
    height: 40px;
    padding: 0.5em;
    border-radius: 1em;
    background-color: #FFC740;
    font-weight: bold;
    cursor: pointer;
    border: none;
    outline: none;
    margin: 1em auto;
`;
