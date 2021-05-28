import logo from './logo.svg';
import './App.css';
import LayoutComponent from './components/LayoutComponent';
import {
	AccountBalanceWrapper,
	FundsOnHoldCard,
	TotalBalanceCard,
	AccBalanceText,
	BalanceWrapper,
	SelectValue,
} from './styles/BalanceStyles';
import { IconDown} from './assets/icon';
import { Divider } from 'antd';

function App() {
  return (
		<>
			<LayoutComponent>
				<AccountBalanceWrapper>
					<TotalBalanceCard>
						<BalanceWrapper>
							<AccBalanceText green>Total account balance</AccBalanceText>
							<SelectValue>
								<span>USD</span>
								<IconDown />
							</SelectValue>
						</BalanceWrapper>
						<Divider style={{ margin: '1rem 0' }} />
					</TotalBalanceCard>
					<FundsOnHoldCard>
						<AccBalanceText dark>Funds on hold</AccBalanceText>
						<Divider style={{margin: ''}} />
					</FundsOnHoldCard>
				</AccountBalanceWrapper>
			</LayoutComponent>
		</>
  );
}

export default App;
