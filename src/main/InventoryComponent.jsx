import React from "react";
import "../css/invoice.css";
import Constants from "./Constants";
import { connect } from "react-redux";
import { getInventoryDetails, changeInventoryIdAction } from "./InventoryAction";
/* import ServiceUtil from "./service"; */
import WarehouseComponent from "./WarehouseComponent";


class InventoryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: ""
        }
        this.changedInventoryId = "W1008";
    }

    fetchInventoryDetails = (selectedWarehouseId) => {
        this.props.dispatch(getInventoryDetails(Constants.GET_INVENTORY_DETAILS_URL, selectedWarehouseId));
    }

    changeInventoryId = () => {
        this.props.dispatch(changeInventoryIdAction(this.changedInventoryId));
    }

    renderItemList = (itemList) => {
        let listToRender = [];

        itemList.forEach(element => {
            listToRender.push(
                <ul key={element}>
                    <li key={element.item.itemId}>{element.item.itemId}</li>
                    <li key={element.item.itemName}>{element.item.itemName}</li>
                    <li key={element.item.itemTypeId}>{element.item.itemTypeId}</li>
                    <li key={element.item.itemTypeName}>{element.item.itemTypeName}</li>
                </ul>

            );
        });

        return listToRender;
    }

    renderInventoryList = (itemList) => {
        let listToRender = [];
        let count = 1;
        itemList.forEach(element => {
            listToRender.push(
                <tr key={"tr" + count}>
                    <td key={count}>{count}</td>
                    <td key={element.item.itemId}>{element.item.itemId}</td>
                    <td key={element.item.itemName}>{element.item.itemName}</td>
                    <td key={element.item.itemTypeId}>{element.item.itemTypeId}</td>
                    <td key={element.item.itemType}>{element.item.itemType}</td>
                    <td key={element.brand.brandId}>{element.brand.brandId}</td>
                    <td key={element.brand.brandName}>{element.brand.brandName}</td>
                </tr>
            );
            count++;

        });

        return listToRender;
    }

    render() {
        return (
            <div>
                <div className="go-to"><a href="/">Create Invoice</a></div>
                <div className="container">
                    <h2 style={{padding:"10px"}}>Inventory Details</h2>
                    <WarehouseComponent fetchInventoryDetails={this.fetchInventoryDetails} />
                    <div>&nbsp;</div>
                    {/* this.props.inventoryList && this.props.inventoryList.length > 0 && <button onClick={this.changeInventoryId}>Change InventoryId</button> */}
                    {this.props.inventoryList && this.props.inventoryList.length > 0 && <p>Warehouse Id : {this.props.inventoryList[0].warehouseId}</p>}
                    {this.props.inventoryList && this.props.inventoryList.length > 0 && <p>Warehouse Name : {this.props.inventoryList[0].warehouseName}</p>}
                    {this.props.inventoryList && this.props.inventoryList.length > 0 && <p>Item Details</p>}
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item Id</th>
                                    <th>Item Name</th>
                                    <th>Item Type Id</th>
                                    <th>Item Type</th>
                                    <th>Brand Id</th>
                                    <th>Brand Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.inventoryList && this.props.inventoryList.length > 0 && this.renderInventoryList(this.props.inventoryList[0].itemDetails)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    inventoryList: state.InventoryReducer.data
});

export default connect(mapState)(InventoryComponent);