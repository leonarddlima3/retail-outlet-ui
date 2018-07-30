const initailState = {

};

const assign = Object.assign;


function WarehouseReducer (state = initailState, action)  {
    switch (action.type) {
        case "WAREHOUSE_ID_LIST_REQUEST":
            return assign({}, state, {

            });
        case "WAREHOUSE_ID_LIST_SUCCESS":
            return assign({}, state, {
                warehouseIdList: action.newState.data
            });
        case "WAREHOUSE_ID_LIST_FAILURE":
            return assign({}, state, {
                warehouseIdList: action.newState.data
            });
        default:
            return state;
    }
}

export default WarehouseReducer;