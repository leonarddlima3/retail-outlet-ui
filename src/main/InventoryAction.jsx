import ServiceUtil from "./service";
/* import Constants from "./Constants";
 */
const getInventoryDetails = (url, warehouseId) => {

    
    return (dispatch) => {
        dispatch(getInventoryDetailsRequest());

        function callback (success, err) {
            if (success) {
                dispatch(getInventoryDetailsSuccess(success.data));
            } else {
                dispatch(getInventoryDetailsFailure(err));
            }
        }

        ServiceUtil.getRequestType(url + warehouseId, callback);
    }
    
}

const getInventoryDetailsRequest = () => {

    return {
        type: "INVENTORY_DETAILS_REQUEST"
    }

}

const getInventoryDetailsSuccess = (result) => {
    return {
        type: "INVENTORY_DETAILS_SUCCESS",
        newState: result
    }

}

const getInventoryDetailsFailure = (error) => {
    return {
        type: "INVENTORY_DETAILS_FAILURE",
        newState: error
    }

}

const changeInventoryIdAction = (inventoryId) => {
    return {
        type: "CHANGE_INVENTORY_ID",
        newState: inventoryId
    }
}


export { getInventoryDetails, changeInventoryIdAction };