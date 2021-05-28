import './App.css';
import LayoutComponent from './components/LayoutComponent';
import Button from '@material-ui/core/Button';

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
	TableContainer,
	MoreText,
	SelectWrapper,
	SelectText
} from './styles/BalanceStyles';
import { IconDown, SearchIcon } from './assets/icon';
import { Divider, Input, Tooltip, DatePicker } from 'antd';

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
						<SelectWrapper>
							<SelectText>KES</SelectText>
							<SelectText>NGN</SelectText>
							<SelectText>GHC</SelectText>

						</SelectWrapper>
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
						className="search-field"
							// style={{ width: '30rem', padding: '1rem' }}
							placeholder="Search Something"
							suffix={
								<Tooltip title="Extra information">
									<SearchIcon style={{ color: 'rgba(0,0,0,.45)' }} />
								</Tooltip>
							}
						/>
						<DatePicker placeholder="March 2020" picker="month" style={{ padding: '1rem' }} />
						<Button style={{background: '#3d8f83',
									borderRadius: '4px',
									padding: '1.25rem 3rem',
									outline: 'none',
									cursor: 'pointer'}}>
							Payout
						</Button>
					</PayoutForm>
				</PayoutTableFormWrapper>
				<TableContainer style={{ overflowX: 'auto', }}>
					<table>
						<tr>
							<th>Payout ID</th>
							<th>Source</th>
							<th>Date</th>
							<th>Amount</th>
							
						</tr>
						<tr>
							<td>KLA12578DHQ</td>
							<td>Vel pellentesque ornare</td>

							<td>25th November, 2020</td>

							<td>$1,200</td>

							
						</tr>

						<tr>
							<td>KLA12578DHQ</td>
							<td>Vel pellentesque ornare</td>
							<td>25th November, 2020</td>
							<td>$1,200</td>
							
						</tr>

						<tr>
							<td>KLA12578DHQ</td>
							<td>Vel pellentesque ornare</td>
							<td>25th November, 2020</td>
							<td>$1,200</td>
							
						</tr>
					</table>
				</TableContainer>

					<Button style={{width: '100%', padding: '2rem 0', border: '1px solid #EBEBEB', margin: '2rem 0'}}>

							<MoreText>See more</MoreText>
						
					</Button>



			</LayoutComponent>
		</>
  );
}

export default App;
