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
              1
          </TotalBalanceWrapper>
          <FundsOnHoldWrapper>
            2
          </FundsOnHoldWrapper>
        </AccountBalanceWrapper>
			</LayoutComponent>
		</>
  );
}

export default App;
