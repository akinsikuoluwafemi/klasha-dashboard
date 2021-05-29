import React, { createContext, useReducer }  from 'react';


const INITIAL_STATE = {
     selectedValue: 'USD',
     showSelect: true,
     currencyArr: ['KES','NGN','GHC']
}

const GlobalReducer = (state, action) => {
    switch(action.type){
        case 'OPEN_SELECT':
        return {
            ...state, showSelect : !state.showSelect
        }
        case 'CHANGE_SELECTED_VALUE':
        return {
            ...state, selectedValue: action.payload
        }
        default: 
            return state
    }
}


const Store = ({children}) => {
    const [state, dispatch] = useReducer(GlobalReducer, INITIAL_STATE);

    return (
        <SelectContext.Provider value={[state, dispatch]}>

            {children}
        </SelectContext.Provider>
    )
}

export const SelectContext = createContext(INITIAL_STATE);

export default Store;