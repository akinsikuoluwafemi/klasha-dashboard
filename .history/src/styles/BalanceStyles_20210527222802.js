import styled from 'styled-components';


export const AccountBalanceWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    height: 17.6rem;
    width: 68.5rem;
    position: relative;
    background: pink;

`;

export const TotalBalanceCard = styled.div`
	background: red;
	border-top-left-radius: 1rem;
	border-bottom-left-radius: 1rem;
	// border-radius: 1rem;
	padding: 2rem;
`;

export const FundsOnHoldCard = styled.div`
	background: teal;
	border-radius: 1rem;
	padding: 2rem;
    position: absolute;
    left: 55%;
    
    height: 100%;
    width: 50%;

`;

export const AccBalanceText = styled.p`
    
${props => props.green && `
    color: #2C665D;
`}

${props => props.dark && `
    color: #2A2A2A;
`}

`;

export const SelectValue = styled.div`
	background: #f5f5f5;
`;

export const BalanceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: 
`;