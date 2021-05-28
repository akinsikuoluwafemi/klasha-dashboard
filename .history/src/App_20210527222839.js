import logo from './logo.svg';
import './App.css';
import LayoutComponent from './components/LayoutComponent';
import {
	AccountBalanceWrapper,
	FundsOnHoldCard,
	TotalBalanceCard,
	AccBalanceText,
	BalanceWrapper,
} from './styles/BalanceStyles';
import { IconDown} from './assets/icon';


function App() {
  return (
		<>
			<LayoutComponent>
				<AccountBalanceWrapper>
          <TotalBalanceCard>
            <BalanceWrapper>

            </BalanceWrapper>
            
					</TotalBalanceCard>
					<FundsOnHoldCard>
						<AccBalanceText dark>Funds on hold</AccBalanceText>
					</FundsOnHoldCard>
				</AccountBalanceWrapper>
			</LayoutComponent>
		</>
  );
}

export default App;
