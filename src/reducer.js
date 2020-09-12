export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) => {
    let num = basket?.reduce((amount, item) => Number(item.price) + Number(amount), 0);
    return num.toFixed(2);
}

const reducer = (state, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {...state, basket: [...state.basket, action.item]}
        case 'REMOVE_BASKET_ITEM':
            
            const index = state.basket.findIndex((basketItem) => (
                basketItem.id === action.id
            ))
            
            let newBasket = [...state.basket];
            if (index >= 0) newBasket.splice(index, 1);
            // console.log(state)
            return {...state, basket: newBasket};
        case 'SET_USER':
            return {...state, user: action.user}
        case 'EMPTY_BASKET':
            return {...state, basket: []}
        default:
            return state;
    }
}

export default reducer;