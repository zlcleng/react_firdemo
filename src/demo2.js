import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import { getChangeInputAction, getAddItemAction, getDeleteAction } from './store/storeCreators'
import {CHANGE_INPUT_VALUE, ADD_ITEM_LIST, DELETE_ITEM_LIST} from './store/actionTypes'

class Demo2 extends Component {
  constructor (props) {
    super (props);
    this.state = store.getState()
    store.subscribe(this.updateState)
  } 
  render () {
    return (
      <div style={{margin:'30px'}}>
        <Input size='large' placeholder='请输入内容' value={this.state.value} onChange={this.changeIpValue} allowClear style={{width:'300px',marginRight:'20px'}}/>
        <Button type='primary' size='large'  onClick={this.handleAddItem}>添加</Button>
        <List
          style={{width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={() => this.handleDeleteItem(index)}>{item}</List.Item>)}
        ></List>
      </div>
    )
  }
  changeIpValue = (e) => {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getChangeInputAction(e.target.value)
    store.dispatch(action)
  }
  handleAddItem = () => {
    if(this.state.value === '') return; 
    // const action = {
    //   type: ADD_ITEM_LIST,
    //   value: [...this.state.list, this.state.value]
    // }
    const action = getAddItemAction([...this.state.list, this.state.value])
    store.dispatch(action)
  }
  handleDeleteItem = (index) => {
    const listArr = JSON.parse(JSON.stringify(this.state.list))
    listArr.splice(index, 1)
    const action = {
      type: DELETE_ITEM_LIST,
      value: listArr
    }
    store.dispatch(action)
  }
  updateState = () => {
    this.setState(store.getState())
  }
}

export default Demo2