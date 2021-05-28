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
	BalanceValue,
	ConvertionValue,
	ValueWrapper,
	PayoutTableFormWrapper,
	PayoutText,
	PayoutForm,
	PayoutBtn,
	TableContainer,
} from './styles/BalanceStyles';
import { IconDown, SearchIcon } from './assets/icon';
import { Divider, Input, Tooltip, DatePicker } from 'antd';

import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import './styles/table.css';


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
						<ValueWrapper>
							<BalanceValue>$5,332.18</BalanceValue>
							<ConvertionValue>1 USD = 381.97 NGN</ConvertionValue>
						</ValueWrapper>
					</TotalBalanceCard>
					<FundsOnHoldCard>
						<AccBalanceText dark>Funds on hold</AccBalanceText>
						<Divider style={{ margin: '2.4rem -3rem' }} />
						<BalanceValue>$5,332.18</BalanceValue>
					</FundsOnHoldCard>
				</AccountBalanceWrapper>

				<PayoutTableFormWrapper>
					<PayoutText>Payout table</PayoutText>
					<PayoutForm>
						<Input
							style={{ width: '30rem', padding: '1rem' }}
							placeholder="Search Something"
							suffix={
								<Tooltip title="Extra information">
									<SearchIcon style={{ color: 'rgba(0,0,0,.45)' }} />
								</Tooltip>
							}
						/>
						<DatePicker placeholder="March 2020" picker="month" style={{ padding: '1rem' }} />
						<PayoutBtn>Payout</PayoutBtn>
					</PayoutForm>
				</PayoutTableFormWrapper>
				< style={{overflowX:'auto'}}>
  <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
      <th>Points</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
      <td>94</td>
    </tr>
    <tr>
      <td>Adam</td>
      <td>Johnson</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
    </tr>
  </table>
</TableContainer>
			</LayoutComponent>
		</>
  );
}

export default App;
