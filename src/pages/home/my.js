import React, {Component} from 'react';
import styles from './my.css';
import avatar from '../../assets/avatar.jpeg'
import { Flex, List, WhiteSpace } from 'antd-mobile';

const Item = List.Item;

export default class My extends Component {
  render() {
    return(
      <div className={styles.my}>
        <header className={styles.top}>
          <span className={styles.setting}>
          <svg t="1587296307842" className={styles.iconfont} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6560" width="200" height="200"><path d="M448.362667 166.826667l113.6 0.170666a64 64 0 0 1 63.893333 63.914667l0.042667 18.517333a301.461333 301.461333 0 0 1 62.101333 34.88l15.210667-8.746666a64 64 0 0 1 87.296 23.381333l56.938666 98.304a64 64 0 0 1-19.989333 85.397333l-3.477333 2.133334-15.274667 8.810666c2.624 24.234667 2.304 48.853333-1.130667 73.322667l10.794667 6.250667a64 64 0 0 1 25.216 84.117333l-1.770667 3.306667-53.333333 92.373333a64 64 0 0 1-84.117333 25.216l-3.328-1.792-14.741334-8.533333a298.538667 298.538667 0 0 1-59.626666 33.28v25.386666a64 64 0 0 1-59.989334 63.957334l-4.074666 0.128-113.6-0.170667a64 64 0 0 1-63.893334-63.893333l-0.064-30.613334a302.613333 302.613333 0 0 1-50.069333-29.696l-27.221333 15.658667a64 64 0 0 1-87.296-23.402667l-56.938667-98.282666a64 64 0 0 1 19.989333-85.418667l3.477334-2.133333 27.690666-15.936c-2.133333-20.266667-2.24-40.768-0.192-61.226667l-30.741333-17.770667A64 64 0 0 1 158.506667 393.6l1.792-3.306667 53.333333-92.373333a64 64 0 0 1 84.117333-25.216l3.306667 1.792 26.794667 15.466667a297.984 297.984 0 0 1 56.426666-34.666667v-24.362667a64 64 0 0 1 59.989334-63.978666l4.074666-0.128z m-0.085334 64l0.064 65.066666-36.778666 17.301334c-15.744 7.402667-30.613333 16.533333-44.309334 27.221333l-34.005333 26.538667-62.570667-36.138667-1.6-0.896-53.333333 92.373333 66.56 38.421334-4.138667 41.152c-1.6 15.978667-1.536 32.106667 0.149334 48.085333l4.394666 41.429333-63.786666 36.736 56.917333 98.282667 63.338667-36.416 33.6 24.597333a237.994667 237.994667 0 0 0 39.466666 23.424l36.736 17.258667 0.128 71.168 113.578667 0.170667-0.064-68.16 39.466667-16.426667a234.538667 234.538667 0 0 0 46.826666-26.112l33.578667-24.128 50.56 29.184 53.290667-92.394667-48.128-27.818666 5.973333-42.688c2.666667-19.093333 2.965333-38.421333 0.896-57.6l-4.48-41.450667 51.456-29.696-56.938667-98.282667-51.2 29.504-33.621333-24.512a238.037333 238.037333 0 0 0-48.938667-27.498666l-39.381333-16.341334-0.128-61.184-113.578667-0.170666z m127.381334 183.722666a128.170667 128.170667 0 0 1 46.890666 174.933334 127.829333 127.829333 0 0 1-174.762666 46.848 128.170667 128.170667 0 0 1-46.869334-174.933334 127.829333 127.829333 0 0 1 174.741334-46.848z m-119.317334 78.805334a64.170667 64.170667 0 0 0 23.466667 87.573333 63.829333 63.829333 0 0 0 87.296-23.402667 64.170667 64.170667 0 0 0-20.266667-85.589333l-3.2-1.984-3.306666-1.770667a63.829333 63.829333 0 0 0-83.989334 25.173334z" p-id="6561" fill="#2c2c2c"></path></svg>
          </span>
          <div className={styles.title}>
            <img src={avatar} />
            <p>地三鲜</p>
          </div>
          <div className={styles.tabBar}>
          <Flex justify="center" style={{textAlign: 'center'}}>
            <Flex.Item>
              <svg t="1587292855999" className={styles.iconfont} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1090" width="200" height="200"><path d="M881.6384 783.274667a396.8256 396.8256 0 0 0-86.016-126.788267 400.384 400.384 0 0 0-127.419733-85.589333l-1.28-0.512c93.038933-66.833067 132.1472-185.728 96.8192-294.357334C728.4224 167.3984 626.730667 93.815467 511.982933 93.866667c-114.807467-0.085333-216.558933 73.5232-251.869866 182.212266-35.310933 108.689067 3.874133 227.6352 96.9984 294.4256l-1.271467 0.512a397.294933 397.294933 0 0 0-127.428267 85.589334 398.148267 398.148267 0 0 0-86.016 126.788266A392.9088 392.9088 0 0 0 110.933333 929.9968 8.507733 8.507733 0 0 0 119.466667 938.666667h63.982933a8.4992 8.4992 0 0 0 8.567467-8.32 315.648 315.648 0 0 1 93.610666-216.8064 318.711467 318.711467 0 0 1 226.3552-93.269334c85.572267 0 165.888 33.1264 226.338134 93.269334a315.648 315.648 0 0 1 93.661866 216.849066 8.4224 8.4224 0 0 0 8.5248 8.277334H904.533333a8.533333 8.533333 0 0 0 8.5248-8.721067 393.898667 393.898667 0 0 0-31.4624-146.670933h0.034134zM512.017067 539.605333a182.877867 182.877867 0 0 1-129.698134-53.486933 180.8896 180.8896 0 0 1-53.76-129.0496c0-48.733867 19.114667-94.532267 53.76-129.041067a182.7328 182.7328 0 0 1 129.706667-53.495466c48.981333 0 95.044267 19.0208 129.732267 53.495466 34.645333 34.466133 53.76 80.349867 53.76 129.041067 0 48.733867-19.114667 94.574933-53.76 129.0496a182.7328 182.7328 0 0 1-129.7408 53.486933z" p-id="1091" fill="#515151"></path></svg>
              <p className={styles.info}>个人信息</p>
            </Flex.Item>
            <Flex.Item>
              <svg t="1587295064968" className={styles.iconfont} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4459" width="200" height="200"><path d="M512 720.416l232.096 171.904a19.2 19.2 0 0 0 16.864 2.88c9.536-2.88 14.592-12.224 11.84-20.864l-88.96-281.6 237.344-176.96a16.48 16.48 0 0 0 6.816-13.152c0-9.152-7.904-16.928-18.112-16.96l-292-0.448-88.48-277.12a17.568 17.568 0 0 0-11.776-11.264c-9.856-2.976-20.16 2.304-23.04 11.264l-88.48 277.12-292 0.48a18.624 18.624 0 0 0-14.624 6.944 16.096 16.096 0 0 0 3.328 23.136l237.376 176.96-88.992 281.6a15.904 15.904 0 0 0 2.72 14.688c6.048 7.744 17.856 9.312 25.984 3.296L512 720.416z m-194.016 223.36a83.008 83.008 0 0 1-114.56-15.424 79.904 79.904 0 0 1-13.28-73.28l75.296-238.24-200.864-149.76a80.096 80.096 0 0 1-15.424-113.92 82.624 82.624 0 0 1 64.864-31.456l245.312-0.384 74.304-232.672c13.6-42.56 59.52-66.112 102.56-53.024A81.536 81.536 0 0 1 590.4 88.64l74.304 232.64 245.312 0.416c45.184 0.064 82.08 36.16 82.016 81.024a80.48 80.48 0 0 1-32.576 64.352l-200.864 149.76 75.296 238.24c13.568 42.976-11.072 88.352-54.496 101.408a83.2 83.2 0 0 1-73.344-12.736L512 800.064l-194.016 143.68z" p-id="4460" fill="#515151"></path></svg>
              <p className={styles.info}>收藏</p>
            </Flex.Item>
            <Flex.Item>
              <svg t="1587294896041" className={styles.iconfont} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4100" width="200" height="200"><path d="M592 336h-416c-52.928 0-96 43.072-96 96v416c0 52.928 43.072 96 96 96h416c52.928 0 96-43.072 96-96v-416c0-52.928-43.072-96-96-96z m32 512a32 32 0 0 1-32 32h-416c-17.632 0-32-14.336-32-32v-416c0-17.632 14.368-32 32-32h416c17.664 0 32 14.368 32 32v416z" p-id="4101" fill="#515151"></path><path d="M720 208h-416a32 32 0 0 0 0 64h416c17.664 0 32 14.368 32 32v416a32 32 0 1 0 64 0v-416c0-52.928-43.072-96-96-96zM528 752h-288a32 32 0 1 0 0 64h288a32 32 0 1 0 0-64z" p-id="4102" fill="#515151"></path><path d="M848 80h-416a32 32 0 0 0 0 64h416c17.664 0 32 14.368 32 32v416a32 32 0 1 0 64 0v-416c0-52.928-43.072-96-96-96z" p-id="4103" fill="#515151"></path></svg>
              <p className={styles.info}>信息</p>
            </Flex.Item>
            <Flex.Item>
              <svg t="1587295219924" className={styles.iconfont} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4637" width="200" height="200"><path d="M927.616 465.6C923.328 236.704 745.888 51.808 528 51.808h-32c-217.888 0-395.328 184.896-399.616 413.76C58.112 487.744 32 528.672 32 576v64c0 70.592 57.408 128 128 128s128-57.408 128-128v-64a128.064 128.064 0 0 0-126.784-127.872C173.728 262.688 318.912 115.808 496 115.808h32c177.12 0 322.272 146.88 334.784 332.32A128.064 128.064 0 0 0 736 576v64c0 57.792 38.72 106.176 91.392 122.016a337.504 337.504 0 0 1-191.936 124.48A79.712 79.712 0 0 0 560 832a80 80 0 1 0 0 160 79.68 79.68 0 0 0 67.872-38.112 402.432 402.432 0 0 0 278.24-193.6C955.968 742.816 992 695.776 992 640v-64c0-47.328-26.112-88.256-64.384-110.4zM224 576v64c0 35.296-28.704 64-64 64s-64-28.704-64-64v-64c0-35.296 28.704-64 64-64s64 28.704 64 64z m704 64c0 34.304-27.2 62.176-61.12 63.712l-2.496-1.184c-0.224 0.512-0.576 0.928-0.8 1.408A64 64 0 0 1 800 640v-64c0-35.296 28.704-64 64-64s64 28.704 64 64v64z" p-id="4638" fill="#515151"></path></svg>
              <p className={styles.info}>客服</p>
            </Flex.Item>
          </Flex>
          </div>
        </header>
        <WhiteSpace size="xl"/>
        <List>
           <Item
             thumb={require("../../assets/level.png")}
             arrow="horizontal"
             onClick={() => {}}
           >我的评级</Item>
           <Item
             thumb={require('../../assets/收藏.png')}
             onClick={() => {}}
             arrow="horizontal"
           >
             我的收藏
           </Item>
           <Item
             thumb={require('../../assets/活动.png')}
             onClick={() => {}}
             arrow="horizontal"
           >
             会员俱乐部
           </Item>
         </List>
      </div>
    )
  }
}
