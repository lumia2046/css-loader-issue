import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Layout, Header, Content, Row, Col, Button, Checkbox, Collapse, Tree,Icon,Progress  } from 'antd'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import styles from './dbChecking.css'


import circleImg from '../images/circle.gif'
import titleImg from '../images/title_bg.png'
import zzjgImg from '../images/zzjg.png'
import sjdyImg from '../images/sjdy.png'
import sjkjImg from '../images/sjkj.png'
import zcImg from '../images/zc.png'
import ycImg from '../images/yc.png'
import zzhyImg from '../images/zzhy.png'

const TreeNode = Tree.TreeNode;
const Panel = Collapse.Panel;

class DbChecking extends Component {
  constructor(){
    super(),
    this.data = []
  }

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }


 componentDidMount(){
   this.timer();
  }

   

  timer() {
    var ele_timer = document.getElementById("timer");
    var n_sec = 1; //秒
    var n_min = 0; //分
    var n_hour = 0; //时
   return setInterval(function () {
   
    var str_sec = n_sec;
    var str_min = n_min;
    var str_hour = n_hour;
    if ( n_sec < 10) {
     str_sec = "0" + n_sec;
    }
    if ( n_min < 10 ) {
     str_min = "0" + n_min;
    }
   
    if ( n_hour < 10 ) {
     str_hour = "0" + n_hour;
    }
   
    var time = (str_hour>0 ?str_hour + ":" : "")+ str_min + ":" + str_sec;

    ele_timer.innerHTML = time;
    n_sec++;
    if (n_sec > 59){
     n_sec = 0;
     n_min++;
    }
    if (n_min > 59) {
     n_sec = 0;
     n_hour++;
    }
   
   
   }, 1000);
  }
   
  
  

  render(){
    //const data = DbCheckingJson
   
    console.log('*********DbCheckingJson*************')
    // console.log(DbCheckingJson)
    /*const loop = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode key={item.key} title={item.key} disableCheckbox={item.key === '0-0-0'}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={item.key} />;
    });*/
    const CheckboxGroup = Checkbox.Group;

    const ruleOptions = ['组织结构', '数据定义', '数据空间', '反向核验'];
    return (
        <div>
          <div className={styles.checking_head} style={{backgroundImage: `url(${titleImg})`}}>
              <div className={styles.checking_head_img} style={{backgroundImage: `url(${circleImg})`}}>
                <span className={styles.checking_head_time} id="timer">00:00</span>
              </div>
              <div className={styles.checking_head_result}>
                <span className={styles.checking_head_result_span}>发现5个异常项</span><br />
                <span className={styles.checking_head_checkItem_span}>正在核验</span>
              </div>
              <div className={styles.checking_head_btn}>
                  <Link to='/dbCheck/dbChecking' onClick={() => {}}>
                    <Button type="primary" onClick={()=>{}} style={{marginRight:'30px'}}>暂停核验</Button>
                  </Link>
                  <Link to='/dbCheck/dbCheckedResult' onClick={() => {}}>
                    <Button type="default" onClick={()=>{}}>取消核验</Button>
                  </Link>
              </div>
          </div>

          <div><Progress percent={50} status="active" /></div>
          <div className={styles.checking_head_title}>
             <div style={{width:'30%',float:'left',paddingLeft:'100px'}}>核验项</div>
             <div style={{width:'50%',float:'left',textAlign:'center'}}>核验统计</div>
             <div style={{width:'10%',float:'left',textAlign:'center'}}>状态</div>
             <div style={{width:'10%',float:'left'}}></div>
          </div>

          <div>
            <div className={styles.checking_item_name}>
                 <img src={zzjgImg}  className={styles.checking_item_name_img} />
                组织机构核验
                <Icon type="caret-down" style={{marginLeft:'10px'}} />
            </div>

            <div className={styles.checking_item_system}>
               <div style={{width:'30%',float:'left',textAlign:'left',height:'40px',lineHeight:'40px',paddingLeft:'100px'}}> <img src={zcImg}  className={styles.checking_item_name_img} />学阿打发斯蒂芬工系统</div>
               <div style={{width:'50%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px'}}>共核验58项  </div>
               <div style={{width:'10%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px',color:'#15C398'}}>正常</div>
               <div style={{width:'10%',float:'left',height:'40px',lineHeight:'40px'}}><Icon type="caret-right" /></div>
            </div>

            <div className={styles.checking_item_system}>
               <div style={{width:'30%',float:'left',textAlign:'ledt',height:'40px',lineHeight:'40px',paddingLeft:'100px'}}> <img src={ycImg}  className={styles.checking_item_name_img} />人事系统</div>
               <div style={{width:'50%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px'}}>共核验58项  </div>
               <div style={{width:'10%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px',color:'#E95E52'}}>存在异常</div>
               <div style={{width:'10%',float:'left',height:'40px',lineHeight:'40px'}}><Icon type="caret-down" /></div>
            </div>

            <div className={styles.checking_item_table}>
               <div style={{width:'30%',float:'left',textAlign:'ledt',height:'40px',lineHeight:'40px',paddingLeft:'130px'}}>LY_XXBX_GSXX_JZGJBXX</div>
               <div style={{width:'50%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px'}}></div>
               <div style={{width:'10%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px',color:'#15C398'}}>正常</div>
               <div style={{width:'10%',float:'left',height:'40px',lineHeight:'40px'}}></div>
            </div>
            <div className={styles.checking_item_table}>
               <div style={{width:'30%',float:'left',textAlign:'ledt',height:'40px',lineHeight:'40px',paddingLeft:'130px'}}>LY_XXBX_GSXX_ZXSJBXX</div>
               <div style={{width:'50%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px'}}></div>
               <div style={{width:'10%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px',color:'#E95E52'}}>存在异常</div>
               <div style={{width:'10%',float:'left',height:'40px',lineHeight:'40px'}}></div>
            </div>


          </div>
          
          <div>
            <div className={styles.checking_item_name} style={{backgroundColor:'#F1FAFF'}}>
                <img src={sjdyImg} className={styles.checking_item_name_img} />
                数据定义核验
                <Icon type="caret-right"  />
            </div>

          </div>

          <div>
            <div className={styles.checking_item_name}>
                <img src={sjkjImg}  className={styles.checking_item_name_img} />
                数据空间核验
                <Icon type="caret-right"  />
            </div>

          </div>


        </div>    
    )
  }
}

export default DbChecking