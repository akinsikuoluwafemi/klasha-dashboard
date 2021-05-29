import {useContext} from 'react';
import {SelectContext} from '../Store';
import '../index.css';
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
} from '../styles/BalanceStyles';
import { IconDown, SearchIcon } from '../assets/icon';
import { Divider, Input, Tooltip, DatePicker } from 'antd';
import CurrencyList from '../components/CurrencyList';
import moment from 'moment';

import '../styles/table.css';


function AccountBalance() {


  const [{selectedValue, showSelect}, dispatch] = useContext(SelectContext);
  
  	function handleDatePicker(date, dateString) {
		console.log(moment(dateString).format('MMMM Do'));
	}


  return (
		<>
				<AccountBalanceWrapper>
					<TotalBalanceCard>
						<BalanceWrapper>
							<AccBalanceText green>Total account balance</AccBalanceText>
							<SelectValue>
								<span>{selectedValue}</span>
								<span onClick={() => dispatch({type: 'OPEN_SELECT'})}>
									<IconDown />
								</span>
							</SelectValue>
						</BalanceWrapper>
						<Divider style={{ margin: '1rem 0' }} />
						<ValueWrapper>
							<BalanceValue>$5,332.18</BalanceValue>
							<ConvertionValue>1 USD = 381.97 NGN</ConvertionValue>
						</ValueWrapper>
                        {/* {showSelect ? () } */}
                        <span style={{display: `${showSelect ? 'block' : 'none' }`}}>
						    <CurrencyList />
                        </span>
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
						<DatePicker placeholder="March 2020" picker="month" style={{ padding: '1rem' }} onChange={handleDatePicker}   />
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



		</>
  );
}

export default AccountBalance;
