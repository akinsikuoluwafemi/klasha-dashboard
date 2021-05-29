
export const openSelect = () => {
    return {
        type: 'OPEN_SELECT'
    }
}

export const changeSelectedValue = (value) => {
    return {
        type: 'CHANGE_SELECTED_VALUE',
        payload: value
    }
}



