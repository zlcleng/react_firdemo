import React, { Component } from 'react'
import { List } from 'antd-mobile'

const Item = List.Item;

class DemoItem extends Component {
  // constructor(props) {
  //   super(props)

  // }
  shouldComponentUpdate (nextProps, nextStates) {
    if (nextProps.content === this.props.content) {
      return false;
    }
  }
  render () {
    const { content, deleteItem, index } = this.props;
    return (
      <div>
        <Item extra={`${content}Name`} onClick={() => deleteItem(index)}>{content}</Item>
      </div>
    )
  }
}
export default DemoItem