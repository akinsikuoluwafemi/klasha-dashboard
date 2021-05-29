import React, {useContext} from 'react';
import { SelectText} from '../styles/BalanceStyles';
import {SelectContext} from '../Store';



export default function CurrencyItem({currencyArr}) {
    const [state, dispatch] = useContext(SelectContext);

    console.log(state)


   
    return (
        <>
            {currencyArr.map(item => {
                 
                  return <SelectText style={{cursor: 'pointer'}} onClick={() => dispatch({type: 'CHANGE_SELECTED_VALUE', payload: item})}>{item}</SelectText>
            })}
        </>

    )
}
