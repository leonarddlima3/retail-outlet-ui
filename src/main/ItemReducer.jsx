const initialState = {

};

const assign = Object.assign;

function ItemReducer (state = initialState, action) {
    switch (action.type) {
        case "ITEM_LIST_REQUEST":
            return assign({}, state, {
                
            });
        case "ITEM_LIST_SUCCESS":
            return assign({}, state, {
                itemList: action.newState.data
            });
        case "ITEM_LIST_FAILURE":
            return assign({}, state, {
                itemList: action.newState
            });
        default:
            return state;
    }
}

export default ItemReducer;