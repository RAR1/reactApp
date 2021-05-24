import {useState} from 'react'
import { InputItem, WhiteSpace, Button } from 'antd-mobile';
import router from 'umi/router'
import styles from './register.css'

export default function() {
  return(
    <div className={styles.register}>
        <div className={styles.logo}>
          <p>Register</p>
        </div>
        <div className={styles.form}>
          <InputItem placeholder="请输入用户名"/>
          <WhiteSpace />
          <InputItem placeholder="请输入密码"/>
          <WhiteSpace size="xl" />
          <Button type="primary">注册</Button>
          <WhiteSpace size="xl" />
          <p className={styles.login}>已有账号？<span onClick={() => router.push("/login")}>现在登录</span></p>
        </div>
    </div>
  )
}
