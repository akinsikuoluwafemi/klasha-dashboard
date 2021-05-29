import React, {useContext} from 'react';
import {SelectWrapper} from '../styles/BalanceStyles';
import {SelectContext} from '../Store';
import CurrencyItem from './CurrencyItem';



export default function CurrencyList() {
    const [{currencyArr}] = useContext(SelectContext)

    return (
        <SelectWrapper>
            <CurrencyItem currencyArr={currencyArr}/>
		</SelectWrapper>
    )
}
