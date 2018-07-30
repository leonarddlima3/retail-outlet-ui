import React from "react";
import { connect } from "react-redux";
import { getItemList } from "./ItemAction";
import Constants from "./Constants";


class ItemComponent extends React.Component {

    constructor(props) {
        super(props);
        this.selectedList = [];
        this.selectedIndexList = [];
        this.total = 0;
        this.tax = 0;
        this.grandTotal = 0;
    }

    componentDidMount() {
        this.props.dispatch(getItemList(Constants.GET_ITEM_LIST_URL));
    }

    renderItemList = (itemList) => {
        let renderList = [];
        let i = 0;

        if (itemList) {
            itemList.forEach(element => {
                renderList.push(<li key={i} index={i} onClick={this.onSelect}><span className="item-name" style={{ textAlign: "left" }} onClick={this.clickNoAffect} disabled>{element.itemName}</span><span className="item-price" style={{ textAlign: "right" }}>{element.itemPrice}</span></li>);
                i++;
            });

            this.props.setItemList(itemList);
        }


        return renderList;
    }

    clickNoAffect = () => {
        return false;
    }

    onSelect = (event) => {
        if (event.target.className === "checked") {
            this.total -= parseInt(event.target.getElementsByClassName("item-price")[0].textContent);
            this.tax = this.total * this.props.taxPerc / 100;
            this.grandTotal = this.total + this.tax;
            this.props.calculateinvoice(this.total, this.tax, this.grandTotal);
            this.selectedList.splice(this.selectedList.indexOf(event.target.innerText), 1);
            this.selectedIndexList.splice(this.selectedIndexList.indexOf(event.target.attributes[0].nodeValue), 1);
            this.props.addOrRemoveItemsFromList(this.selectedIndexList);
            event.target.className = "";
        } else {
            this.total += parseInt(event.target.getElementsByClassName("item-price")[0].textContent);
            this.tax = this.total * this.props.taxPerc / 100;
            this.grandTotal = this.total + this.tax;
            this.props.calculateinvoice(this.total, this.tax, this.grandTotal);
            this.selectedList.push(event.target.innerText);
            this.selectedIndexList.push(this.props.itemList[parseInt(event.target.attributes[0].nodeValue)]);
            this.props.addOrRemoveItemsFromList(this.selectedIndexList);
            event.target.className = "checked";
        }
    }



    render() {
        return (
            <div>
                <ul id="myUL">
                    {this.props.itemList && this.renderItemList(this.props.itemList)}
                </ul>
            </div>
        );

    }
}

const mapState = (state) => ({
    itemList: state.ItemReducer.itemList
});

export default connect(mapState)(ItemComponent);