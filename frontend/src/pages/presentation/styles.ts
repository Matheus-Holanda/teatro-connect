import styled from "styled-components";

export const Container = styled.div`

    @keyframes scaleUp {
        from{
            transform: scale(0);
            opacity: 0;
        }to{
            transform: scale(1);
            opacity: 1;
        }
    }

    animation: scaleUp 1s;
    display: flex;
    flex-direction: column;
    margin-top: 50vh;
    align-items: center;
`;

export const Headline = styled.h1`
    color: #FFC700;
`;