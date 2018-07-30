import React from "react";
import { getWarehouseIds } from "./WarehouseAction";
import Constants from "./Constants";
import { connect } from "react-redux";

class WarehouseComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hide: true
        };
    }

    componentDidMount() {
        this.getWarehouseIds();
    }

    getWarehouseIds = () => {
        this.props.dispatch(getWarehouseIds(Constants.GET_WAREHOUSE_ID_LIST_URL));
    }

    getCorrespondingInventoryDetails = (event) => {
        this.props.fetchInventoryDetails(event.target.innerText);
    }

    renderWarehouseIds = (warehouseIdList) => {
        if (!warehouseIdList) {
            return;
        }
        let renderList = [];

        warehouseIdList.forEach(element => {
            renderList.push(<a key={element} className="dropdown-item" onClick={this.getCorrespondingInventoryDetails}>{element}</a>);
        });
        return renderList;
    }

    render() {
        let dropdownVisibility = this.state.hide ? "hidden" : "";
        return (
            <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    Select Warehouse Id
                </button>
                <div className={"dropdown-menu " + dropdownVisibility}>
                    {this.props.data && this.renderWarehouseIds(this.props.data.warehouseIdList)}
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    data: state.WarehouseReducer
});


export default connect(mapState)(WarehouseComponent);