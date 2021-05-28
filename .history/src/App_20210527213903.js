import logo from './logo.svg';
import './App.css';
import LayoutComponent from './components/LayoutComponent';
import {AccountBalanceWrapper, FundsOnHoldWrapper, TotalBalanceWrapper } from './styles/BalanceStyles';



function App() {
  return (
		<>
			<LayoutComponent>
				<AccountBalanceWrapper>
          <TotalBalanceWrapper>

          </TotalBalanceWrapper>
          <FundsOnHoldWrapper
        </AccountBalanceWrapper>
			</LayoutComponent>
		</>
  );
}

export default App;
