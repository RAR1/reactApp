import React, {Component} from 'react';
import { TabBar } from 'antd-mobile';
import HomePage from './homePage'
import My from './my'
import './home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'yellowTab',
      hidden: false,
      fullScreen: true,

    }
  }
  render() {
   return (
     <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
       <TabBar
         unselectedTintColor="#949494"
         tintColor="#33A3F4"
         barTintColor="white"
         hidden={this.state.hidden}
       >
         <TabBar.Item
           title="Life"
           key="Life"
           icon={<div style={{
             width: '22px',
             height: '22px',
             background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
           />
           }
           selectedIcon={<div style={{
             width: '22px',
             height: '22px',
             background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
           />
           }
           selected={this.state.selectedTab === 'blueTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'blueTab',
             });
           }}
           data-seed="logId"
         >
           <HomePage />
         </TabBar.Item>
         <TabBar.Item
           icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
           selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
           title="My"
           key="my"
           selected={this.state.selectedTab === 'yellowTab'}
           onPress={() => {
             this.setState({
               selectedTab: 'yellowTab',
             });
           }}
         >
           <My />
         </TabBar.Item>
       </TabBar>
     </div>
   );
 }
}
