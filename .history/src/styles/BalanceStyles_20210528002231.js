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

    & > span {
        margin-right: 1rem;
    }
`;

export const ValueWrapper = styled.div`
    display: grid!important;
    

`;

export const BalanceValue = styled.span`
    font-weight: 700;
    // line-height: 43.2px;
    font-size: 3.6rem;
    // letter-spacing: 0.1px;
`


export const ConvertionValue = styled.span`
    color: #A6ABB2;


`;

export const BalanceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const PayoutTableFormWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 3rem 0;
	overflow: scroll;
	// width: max-content;

	@media (max-width: 768px) {
		width: max-content;
	}
`;

export const PayoutText = styled.p`
    font-weight: 700;
    size: 1.8rem;
    margin: 0;

`

export const PayoutForm = styled.div`

	& > * {
		margin-left: 3rem;
	}
`;

export const PayoutBtn = styled.button`
	background: #3d8f83;
    border-radius: 4px;
    padding: 1rem 3rem;
    outline: none;
    cursor: pointer;
`;


export const TableContainer = styled.div`
	& > table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	& > td,
	& > th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

    & 


`;