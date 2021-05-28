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
	// background: pink;
    padding: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    
`;

export const HeaderBalance = styled.div`
	// background: purple;
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
	align-items: center;
	// justify-content: space-around;
	// background: purple;
	padding: 0 2rem;

    @media(max-width: 375px){
        padding: 0;
    }

    @media(max-width: 320px){
        m
    }

	& > span {
		border: 1px solid red;
		border-radius: 50%;
		padding: 0.3rem;
		background: #f5f5f5;
	}
`;

export const NotificationCircle = styled.div`
	${(props) =>
		props.big &&
		`
        height: 4.3rem;
        width: 4.3rem;
        background: #F5F5F5;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-right: 2rem;
        `}

	${(props) =>
		props.small &&
		`
        	height: 1rem;
			width: 1rem;
			background: red;
			border-radius: 50%;
			position: absolute;
			top: 0;
			left: 29px;

        `}
`;