import React, { Component } from "react";
import "../styles/expendTypeList.css";

const list = [
  {
    icon: "",
    type: 0,
    label: "房租"
  },
  {
    icon: "",
    type: 1,
    label: "交通"
  },
  {
    icon: "",
    type: 2,
    label: "吃饭"
  }
];

class ExpendTypeList extends Component {
  // constructor() {}

  handleSelectType(type, e) {
    console.log("我点击了");
    console.log(type, e);
  }
  render() {
    return (
      <div className="list-container">
        {list.map((item, index) => (
          <div
            className="list-item"
            key={index}
            onClick={this.handleSelectType.bind(this)}
          >
            {item.label}
          </div>
        ))}
      </div>
    );
  }
}

export default ExpendTypeList;
