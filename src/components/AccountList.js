import React, { Component } from "react";

class AccountList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    let accountList = this.props.accountList
    return (
      <div className="account-list-container">
        {accountList.map((item, index) => (
          <div className="list-item" key={index}>
            <div>{item.accountTypeName}</div>
            <div>￥{item.money}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default AccountList