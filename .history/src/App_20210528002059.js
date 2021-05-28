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
        <TableContainer>

              <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>

        </TableContainer>
			</LayoutComponent>
		</>
  );
}

export default App;
