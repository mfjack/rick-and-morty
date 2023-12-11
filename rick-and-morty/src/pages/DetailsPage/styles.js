import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 5rem;

    img {
        max-width: 18rem;
        border-radius: 0.5rem;
    }

    button {
        border-radius: 0.5rem;
        width: 10%;
        padding: 0.3rem;
        border: 0.06rem solid black;
        cursor: pointer;
    }
`;
