import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: var(--soft-white);
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--dark);
    max-width: 12.5rem;

    img {
        max-width: 11.25rem;
        border-radius: 0.5rem;
    }

    h2 {
        color: var(--deep-blue);
        font-size: 1.4rem;
    }

    .btn {
        display: flex;
        gap: 1rem;
    }

    button {
        padding: 0.3rem;
        border-radius: 0.3rem;
        border: 0.06rem solid black;
        cursor: pointer;
    }
`;
