import styled from 'styled-components';


export const AccountBalanceWrapper = styled.div`
	display: grid;
	grid-template-columns: 2fr 1.5fr;
	height: 17.6rem;
	width: 68.5rem;
	position: relative;
	// background: pink;
`;

export const TotalBalanceCard = styled.div`
	background: #fff;
	border-top-left-radius: 1rem;
	border-bottom-left-radius: 1rem;
	// border-radius: 1rem;
	padding: 2rem;
	border: 1px solid #ebebeb;
`;

export const FundsOnHoldCard = styled.div`
	background: #f5f5f5;
	border-radius: 1rem;
	padding: 2rem;
	position: absolute;
	left: 55%;

	height: 100%;
	width: 50%;
	border: 1px solid #EBEBEB;
    
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
    padding: .5rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 2rem;
    background: red;

    & > span {
        margin-right: 1rem;
    }
`;

export const ValueWrapper = styled.div`
    display: grid!important;
    background: red;
    

`;

export const BalanceValue = styled.span`
    font-weight: 700;
    // line-height: 43.2px;
    font-size: 3.6rem;
    // letter-spacing: 0.1px;
    margin
`


export const ConvertionValue = styled.p`
    color: #A6ABB2;


`;

export const BalanceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
