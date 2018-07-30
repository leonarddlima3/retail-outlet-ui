import ServiceUtil from "./service";
const getWarehouseIds = (url) => {

    return (dispatch) => {

        dispatch(getWarehouseIdListRequest());
        function callback(success, err) {

            if(success) {
                dispatch(getWarehouseIdListSuccess(success));
            } else {
                dispatch(getWarehouseIdListFailure(err))
            }

        }
        ServiceUtil.getRequestType(url, callback);
    };
}



const getWarehouseIdListRequest = () => {
    return {
        type: "WAREHOUSE_ID_LIST_REQUEST"
    }
}


const getWarehouseIdListSuccess = (result) => {
    return {
        type: "WAREHOUSE_ID_LIST_SUCCESS",
        newState: result.data
    }
}

const getWarehouseIdListFailure = (error) => {
    return {
        type: "WAREHOUSE_ID_LIST_FAILURE",
        newState: error
    }
}


export {
    getWarehouseIds
}

