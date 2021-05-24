import React,{Component} from 'react'
import { InputItem, WhiteSpace, Button } from 'antd-mobile';
import router from 'umi/router'
import {connect} from 'dva'
import styles from  './login.css';

@connect(
  state => (
    {
    count: state.count.count
    }
  ),
  {
    addCount: ()=> ({
      type: 'count/addCount'
    }),
    delCount: ()=>({
      type: 'count/delCount'
    })
  })
class Login extends Component {
  render() {
    return(
      <div className={styles.login}>
        <div className={styles.logo}>
          <p>Login</p>
        </div>
        <div className={styles.form}>
          <InputItem placeholder="请输入用户名"/>
          <WhiteSpace />
          <InputItem placeholder="请输入密码"/>
          <WhiteSpace size="xl" />
          <Button type="primary" onClick={() => {router.push("/home")}}>登录</Button>
          <WhiteSpace size="xl" />
          <p className={styles.register}>没有账号？<span onClick={() => router.push("/register")}>现在注册</span></p>
          <p className={styles.register}>忘记密码？</p>
        </div>
        {/*
          <div>
            <p>{this.props.count}</p>
            <Button type="primary" onClick={()=>this.props.addCount()}>加+1</Button>
            <Button type="danger" onClick={()=>this.props.delCount()}>减-1</Button>
          </div>
          <Button onClick={()=>{router.push("/register")}}>注册</Button>
          */}
      </div>
    )
  }
}

export default Login
