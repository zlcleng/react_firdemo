import React, { Component } from 'react';
import { InputItem, Button, List } from 'antd-mobile'
import DemoItem from './demo1-item'
import WxImageViewer from 'react-wx-images-viewer';
import axios from 'axios'

class Demo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inpValue: '',
      list: [],
      imags: [
        require('./FEMALE.png'),
        require('./help.jpg'),
        require('./liuliang.png')
      ],
      index: 0,
      isOpen: false
    }
  }
  componentDidMount () {
    axios.get('/api/demo').then(res => {
      console.log(res)
    }).catch()
  }
  handleSubmit = () => {
    this.setState((prevState) => {
      const {list, inpValue} = prevState
      if (inpValue === '') return;
      return {
        list: [...list, inpValue],
        inpValue: ''
      }
    })
  }
  changeInput = (val) => {
    this.setState(() => ({
      inpValue: val
    }))
  }
  deleteItema = (index) => {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1)
      return {list}
    })
  }
  onClose = () =>{
    this.setState({
      isOpen: false
    })
  }

  openViewer (index){
    this.setState({
      index,
      isOpen: true
    })
  }
  render () {
    const { inpValue, list } = this.state;
    const {
      imags,
      index,
      isOpen
    } = this.state;
    return (
      <div>
          <InputItem
            value={inpValue}
            onChange={(val) => this.changeInput(val)}
            placeholder='请输入'
          >
            内容
          </InputItem>
          <Button onClick={this.handleSubmit} type='primary'>提交</Button>
          <List>
            { list.map((val, index) => (
              <DemoItem
                key={index}
                index={index}
                content={val} 
                deleteItem={this.deleteItema}>
              </DemoItem>
            ))}
          </List>
          <div className="img-list">
          {
            imags.map((item, index) => {
              return <div style={{width:'30%'}} key={item}>
                <img src={item} alt="" onClick={this.openViewer.bind(this, index)} width="100%" height="auto" className=""/> 
              </div>
            })
          }
        </div>
        {
          isOpen ? <WxImageViewer onClose={this.onClose} urls={imags} index={index}/> : ""
        }
      </div>
    )
  }
}
export default Demo