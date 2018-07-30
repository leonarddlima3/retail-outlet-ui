const initialState = {

};
const assign = Object.assign;

function InventoryReducer (state = initialState, action) {
    switch(action.type) {
        case "INVENTORY_DETAILS_REQUEST" :
            return assign({}, state, {
            });
        case "INVENTORY_DETAILS_SUCCESS" :
            return assign({}, state, {
                data: action.newState.data
            });
        case "INVENTORY_DETAILS_FAILURE" :
            return assign({}, state, {
                data: action.newState
            });
        case "CHANGE_INVENTORY_ID" :
            return assign({}, state, {
                data: {
                    "status": "success",
                    "code": 100,
                    "data": [
                        {
                            "warehouseId": action.newState,
                            "warehouseName": "TIMES SQUARE",
                            "itemDetails": [
                                {
                                    "item": {
                                        "itemId": "I1001",
                                        "itemName": "OLIVE OIL",
                                        "itemTypeId": "IT1001",
                                        "itemTypeName": "OIL"
                                    },
                                    "brand": {
                                        "brandId": "B1001",
                                        "brandName": "NESTLE"
                                    }
                                }
                            ]
                        }
                    ]
                }
            });
        default :
            return state;
    }
}

export default InventoryReducer;