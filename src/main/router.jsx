import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InvoiceComponent from "./InvoiceComponent";
import InventoryComponent from "./InventoryComponent";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import InventoryReducer from "./InventoryReducer";
import ItemReducer from "./ItemReducer";
import WarehouseReducer from "./WarehouseReducer";
import thunk from "redux-thunk";

const getRetailRouter = () => {

    const context = {};
    const appReducers = combineReducers({
        InventoryReducer,
        ItemReducer,
        WarehouseReducer
    });
    let store = createStore(appReducers, applyMiddleware(thunk));
    console.log(store);
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch context={context}>
                        <Route path="/" exact component={InvoiceComponent} />
                        <Route path="/inventory" exact component={InventoryComponent} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );


}

export { getRetailRouter };