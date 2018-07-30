import React from "react";
import "../css/invoice.css";
import "../css/item.css";
import ServiceUtil from "./service";
import Constants from "./Constants";
import ItemComponent from "./ItemComponent";

class InvoiceComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      tax: 0,
      taxPerc: 0,
      grandTotal: 0
    };
    this.itemDetailsList = [];
    this.selectedItemList = [];
  }


  submitData = () => {
    let date = new Date();
    let formattedDate = ('0' + date.getDate()).slice(-2);
    let formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
    let formattedYear = date.getFullYear().toString().substr(2, 2);
    let dateString = formattedMonth + '/' + formattedDate + '/' + formattedYear;
    let selectedItemList = this.selectedItemList;
    let selectedIdList = [];
    selectedItemList.forEach(element => {
      selectedIdList.push(element.itemId);
    });

    let payload = {
      "invoiceId": "",
      "date": dateString,
      "total": this.state.grandTotal,
      "tax": this.state.tax,
      "taxPerc": this.state.taxPerc,
      "custId": "C1001",
      "empId": "E1001",
      "itemId": selectedIdList,
      "brandId": [],
      "storeId": "S1001"
    }
    ServiceUtil.postRequestType(Constants.SUBMIT_INVOICE_DETAILS_URL, payload, this.successResponse);
  }

  addOrRemoveItemsFromList = (selectedList) => {
    this.selectedItemList = selectedList;
  }

  successResponse = (response) => {
    console.log("Added succesfully");
  }

  calculateinvoice = (total, tax, grandTotal) => {
    this.setState({
      total: total,
      tax: tax,
      grandTotal: grandTotal
    });
  }

  setTaxPerc = (event) => {
    let taxPerc = parseInt(event.target.value);
    let total = this.state.total;
    let tax = this.state.tax;
    let grandTotal = this.state.grandTotal;

    tax = total * taxPerc / 100;
    grandTotal = total + tax;

    this.setState({
      taxPerc: taxPerc,
      tax: tax,
      grandTotal: grandTotal
    });

  }

  setItemList = (itemList) => {
    this.itemDetailsList = itemList;
  }

  render() {
    return (
      <div className="invoice-contanier">
        <div className="go-to"><a href="/inventory">Check Inventory Details</a></div>
        <div className="container">
          <div className="container" style={{ paddingTop: "20px" }}>
            <h2>Invoice</h2>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td><span>Customer Name : </span></td>
                    <td><input ref="name" type="text"></input></td>
                  </tr>
                  <tr>
                    <td><span>Tax Percentage : </span></td>
                    <td><input ref="taxPerc" type="text" onKeyUp={this.setTaxPerc}></input>&nbsp;%</td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center" }}><span>Add below items to list : </span></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center" }}>
                      <ItemComponent getItemList={this.getItemList} calculateinvoice={this.calculateinvoice} taxPerc={this.state.taxPerc} addOrRemoveItemsFromList={this.addOrRemoveItemsFromList} setItemList={this.setItemList}/>
                    </td>
                  </tr>
                  <tr>
                    <td><span>Total : </span></td>
                    <td><input ref="total" type="text" value={this.state.total}></input></td>
                  </tr>
                  <tr>
                    <td><span>Total Tax : </span></td>
                    <td><input ref="tax" type="text" value={this.state.tax}></input></td>
                  </tr>
                  <tr>
                    <td><span>Grand Total : </span></td>
                    <td><input ref="tax" type="text" value={this.state.grandTotal}></input></td>
                  </tr>
                  <tr>
                    <td colSpan="2"></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center" }}><button onClick={this.submitData}>Submit</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default InvoiceComponent;