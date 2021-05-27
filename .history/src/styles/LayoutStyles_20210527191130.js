import styled from 'styled-components';

export const LogoWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    // background: transparent;
    margin-bottom: 2.3rem;



`

export const SubMenuContent = styled.div`
	display: flex;
	align-items: center;
	color: #a6abb2;
	z-index: 1000000;

	.sub-menu-text {
		margin-left: 1rem;
		font-size: 1.3rem;
		color: #a6abb2;
	}
`;

export const MenuText = styled.p`
    font-weight: 600;
     color: #000;
     font-size: 1.3rem;

`;



export const HeaderContent = styled.div`
	background: pink;
    padding: 2rem;
    height: 100%;
    display: flex;
    // align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    
`;

export const HeaderBalance = styled.div`
	background: purple;
	& > p {
		margin-bottom: 0;
		font-size: 1.8rem;
		color: #2a2a2a;
		font-weight: 700;
		line-height: 21.6px;
	}

	& > small {
		color: #a6abb2;
		font-size: 1.2rem;
		line-height: 14.4px;
	}
`;


export const UserNotificationWrapper = styled.div`
    display: flex;
    // align-items: center;

    & > span {
        border: 1px solid red;
        border-radius: 50%;
    }
    

`;