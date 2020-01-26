import React, { Component } from "react";
import AccountTypeList from './AccountTypeList.js'
import AccountList from './AccountList.js'

class AccountInput extends Component {
  constructor() {
    super()
    this.state = {
      accountType: '',
      money: '',
      accountList: []
    }
  }

  getSelectType(value) {
    this.setState({
      accountType: value
    })
  }

  handleInputChange(e) {
    this.setState({
      money: e.target.value
    })
  }

  handleSubmit() {
    let accountList = this.state.accountList
    accountList.push({
      accountTypeName: this.state.accountType.label,
      money: this.state.money
    })
    this.setState({
      accountList: accountList
    })
  }

  render() {
    return (
      <div>
        <div className="account-input-container">
          <AccountTypeList getSelectType={this.getSelectType.bind(this)} />
          <div>
            <label>金额(￥)：</label>
            <input onChange={this.handleInputChange.bind(this)} type="text" name="name" />
          </div> 
          <button className="btn" onClick={this.handleSubmit.bind(this)}>确定</button>
        </div>
       
        <div className="account-list-container">
          <AccountList accountList={this.state.accountList}/>
        </div>
      </div>
    )
  }
}

export default AccountInput