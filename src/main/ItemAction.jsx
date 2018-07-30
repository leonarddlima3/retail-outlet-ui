import ServiceUtil from "./service";


const getItemList = (url) => {

    return (dispatch) => {

        dispatch(getItemListRequest());
        function callback (success, err) {
            if (success) {
                dispatch(getItemListSuccess(success.data));
            } else {
                dispatch(getItemListFailure(err));
            }
            
        }
    
        ServiceUtil.getRequestType(url, callback);
    };
}

const getItemListRequest = () => {

    return {
        type: "ITEM_LIST_REQUEST"
    }

}

const getItemListSuccess = (result) => {

    return {
        type: "ITEM_LIST_SUCCESS",
        newState: result
    }
}

const getItemListFailure = (error) => {

    return {
        type: "ITEM_LIST_FAILURE",
        newState: error
    }
}



export {
    getItemList
}

