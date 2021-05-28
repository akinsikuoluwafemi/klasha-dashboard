import logo from './logo.svg';
import './App.css';
import LayoutComponent from './components/LayoutComponent';
import { AccountBalanceWrapper, FundsOnHoldWrapper, TotalBalanceWrapper, AccBalanceText } from './styles/BalanceStyles';



function App() {
  return (
		<>
			<LayoutComponent>
				<AccountBalanceWrapper>
					<TotalBalanceWrapper>
						<AccBalanceText>Total account balance</AccBalanceText>
					</TotalBalanceWrapper>
					<FundsOnHoldWrapper>
						<AccBalanceText dark>Funds on hold</AccBalanceText>
					</FundsOnHoldWrapper>
				</AccountBalanceWrapper>
			</LayoutComponent>
		</>
  );
}

export default App;
