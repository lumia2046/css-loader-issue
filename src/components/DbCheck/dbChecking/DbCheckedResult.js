import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Layout, Header, Content, Row, Col, Button, Checkbox, Collapse, Tree,Icon,Progress  } from 'antd'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import styles from './dbChecking.css'
import SyncSql from './SyncSql.js'



import resultScoreImg from '../images/resultScore.png'
import titleImg from '../images/title_bg.png'
import resultDesImg from '../images/resultDes.png'
import createtimeImg from '../images/createtime.png'
import tablebaseImg from '../images/tablebase.png'
import userImg from '../images/user.png'

import zzjgImg from '../images/zzjg.png'
import sjdyImg from '../images/sjdy.png'
import sjkjImg from '../images/sjkj.png'
import zcImg from '../images/zc.png'
import ycImg from '../images/yc.png'
import zzhyImg from '../images/zzhy.png'

const TreeNode = Tree.TreeNode;
const Panel = Collapse.Panel;

class DbCheckedResult extends Component {
  constructor(){
    super(),
    this.state= {
      showSyncDialog:false
    }

  }

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }

   //设置弹出框状态
  setSyncDialogState=()=>{
    this.setState({
      showSyncDialog: false,
    });
  }


 componentDidMount(){
  
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
          <div className={styles.checked_result_head} style={{backgroundImage: `url(${titleImg})`}}>
              <div className={styles.checked_result_head_img} style={{backgroundImage: `url(${resultScoreImg})`}}>
                <span className={styles.checking_head_time} id="timer">85分</span>
              </div>
              <div className={styles.checked_result_num}>
                <span className={styles.checking_head_result_span}>发现5个异常项</span>
                <span className={styles.checked_head_result_small_title}>(组织机构2个，数据定义3个，数据空间0个))</span>
                <br />
                <img src={resultDesImg} className={styles.checked_head_result_des_img}/>
                <span className={styles.checked_head_result_des}>本次核验10个业务系统，365张表，2725个字段，核验规则：组织机构、数据定义、数据空间</span>

              </div>
              <div className={styles.checking_head_btn}>
          
                  <Button type="primary" style={{marginRight:'30px'}} onClick={() => {
                  this.setState({
                    showSyncDialog: true,
                  });
                  
                }}>同步脚本</Button>
                  <Button type="default" onClick={()=>{}}>查看报告</Button>
              </div>
          </div>

          <div className={styles.checking_head_title}>
             <div style={{width:'30%',float:'left',paddingLeft:'100px'}}>名称</div>
             <div style={{width:'50%',float:'left',textAlign:'center'}}>描述</div>
             <div style={{width:'10%',float:'left',textAlign:'center'}}>异常类型</div>
             <div style={{width:'10%',float:'left'}}></div>
          </div>

          <div>
            <div className={styles.checking_item_name}>
                 
                 <div style={{width:'30%',float:'left'}}>
                   人事管理系统
                  <Icon type="caret-down" style={{marginLeft:'10px'}} />
                </div>
                <div style={{width:'70%',float:'left'}}>
                    <div style={{marginRight:'20px',float:'left'}} ><img src={tablebaseImg} />表空间：LYHR</div>
                    <div style={{marginRight:'20px',float:'left'}}><img src={userImg} />用户：LYHR</div>
                    <div style={{marginRight:'20px',float:'left'}}><img src={createtimeImg}/>合格率：80%</div>
                </div>

            </div>

            <div className={styles.checking_item_system}>
               <div style={{width:'30%',float:'left',textAlign:'left',height:'40px',lineHeight:'40px',paddingLeft:'100px'}}> LY_XXBX_GSXX_JZGJBXX</div>
               <div style={{width:'50%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px'}}>标准中存在，物理库中不存在  </div>
               <div style={{width:'10%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px',color:'#E95E52'}}>组织结构异常</div>
               <div style={{width:'10%',float:'left',height:'40px',lineHeight:'40px'}}></div>
            </div>

            <div className={styles.checking_item_system}>
               <div style={{width:'30%',float:'left',textAlign:'left',height:'40px',lineHeight:'40px',paddingLeft:'100px'}}> LY_XXBX_GSXX_JZGJBXX</div>
               <div style={{width:'50%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px'}}>标准中存在，物理库中不存在  </div>
               <div style={{width:'10%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px',color:'#E95E52'}}>组织结构异常</div>
               <div style={{width:'10%',float:'left',height:'40px',lineHeight:'40px'}}></div>
            </div>

            <div className={styles.checking_item_system}>
               <div style={{width:'30%',float:'left',textAlign:'ledt',height:'40px',lineHeight:'40px',paddingLeft:'100px'}}> LY_XXBX_GSXX_ZXSJBXX</div>
               <div style={{width:'50%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px'}}></div>
               <div style={{width:'10%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px',color:'#E95E52'}}>字段异常</div>
               <div style={{width:'10%',float:'left',height:'40px',lineHeight:'40px'}}><Icon type="caret-down" /></div>
            </div>

            <div className={styles.checking_item_table}>
               <div style={{width:'30%',float:'left',textAlign:'ledt',height:'40px',lineHeight:'40px',paddingLeft:'130px'}}>XH</div>
               <div style={{width:'50%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px'}}>XH字段在标准中存在，在物理库中不存在</div>
               <div style={{width:'10%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px',color:'#E95E52'}}>数据定义异常</div>
               <div style={{width:'10%',float:'left',height:'40px',lineHeight:'40px'}}></div>
            </div>
            <div className={styles.checking_item_table}>
               <div style={{width:'30%',float:'left',textAlign:'ledt',height:'40px',lineHeight:'40px',paddingLeft:'130px'}}>XM</div>
               <div style={{width:'50%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px'}}>XM字段类型和长度，标准和物理库不一致</div>
               <div style={{width:'10%',float:'left',textAlign:'center',height:'40px',lineHeight:'40px',color:'#E95E52'}}>数据空间异常</div>
               <div style={{width:'10%',float:'left',height:'40px',lineHeight:'40px'}}></div>
            </div>


          </div>

          
          <div>
            <div className={styles.checking_item_name}>
              <div style={{width:'30%',float:'left'}}>
                 教务管理系统
                <Icon type="caret-right" style={{marginLeft:'10px'}} />
              </div>
                <div style={{width:'70%',float:'left'}}>
                    <div style={{marginRight:'20px',float:'left'}} ><img src={tablebaseImg} />表空间：LYHR</div>
                    <div style={{marginRight:'20px',float:'left'}}><img src={userImg} />用户：LYHR</div>
                    <div style={{marginRight:'20px',float:'left'}}><img src={createtimeImg}/>合格率：80%</div>
                </div>

             </div>

          </div>

          <div>
              <div className={styles.checking_item_name}>
                  
                   <div style={{width:'30%',float:'left'}}>
                     学工管理系统
                    <Icon type="caret-right" style={{marginLeft:'10px'}} />
                  </div>
                  <div style={{width:'70%',float:'left'}}>
                      <div style={{marginRight:'20px',float:'left'}} ><img src={tablebaseImg} />表空间：LYHR</div>
                      <div style={{marginRight:'20px',float:'left'}}><img src={userImg} />用户：LYHR</div>
                      <div style={{marginRight:'20px',float:'left'}}><img src={createtimeImg}/>合格率：80%</div>
                  </div>

            </div>
          </div>

        
        <SyncSql showSyncDialog={this.state.showSyncDialog} setSyncDialogState={this.setSyncDialogState} />
        </div> 

         
    )
  }
}

export default DbCheckedResult