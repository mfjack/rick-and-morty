import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    main {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 1rem;
    }

    aside {
        min-width: 15%;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
        min-width: 70%;
        margin: 1.25rem 0rem 0rem 1.25rem;

        input {
            height: 1.7rem;
            border-radius: 0.5rem;
            width: 100%;
        }

        button {
            margin-top: 0.3rem;
            padding: 0.3rem;
            border-radius: 0.5rem;
            cursor: pointer;
        }
    }
`;
