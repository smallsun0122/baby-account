import React, { Component } from "react";
import {getAccount} from '../api/api.js'
import AccountInput from './AccountInput.js'
import AccountList from './AccountList.js'

class AccountApp extends Component {
  constructor() {
    super()
    this.state = {
      accountList: []
    }
  }


  componentDidMount() {
    getAccount().then(res => {
      this.setState({
        accountList: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <AccountInput />
        <div className="account-list-container">
          <AccountList accountList={this.state.accountList}/>
        </div>
      </div>
    )
  }
}

export default AccountApp