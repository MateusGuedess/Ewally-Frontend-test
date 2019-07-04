import styled from 'styled-components'

export const StyledContainer = styled.div`
    background: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledBalanceSection = styled.section`
    height: 10%;
    width: 100%;
    border-right: solid black 1px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const StyledSpan = styled.span`
    color: black;   
`;

export const StyledStatementSection = styled.section`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledHeader = styled.div`
    width: 50%;
    form {
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        @media (max-width: 868px) {
            flex-direction: column;
        }
    }
`;

export const StyledChart = styled.div`
    overflow-x: scroll;
    overflow-y:scroll;
    width: 100%;
    height: 2000px;
    white-space: nowrap
`;