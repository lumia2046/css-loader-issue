import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Layout, Header, Content, Row, Col, Button, Checkbox, Collapse, Tree,Icon  } from 'antd'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import styles from './dbChecking.css'

import selectImg from '../images/select.png'
import uncheckImg from '../images/uncheck.png'

import createtimeImg from '../images/createtime.png'
import tablebaseImg from '../images/tablebase.png'
import tablecountImg from '../images/tablecount.png'
import userImg from '../images/user.png'
import checkedImg from '../images/checked.png'
import titleImg from '../images/title_bg.png'

const TreeNode = Tree.TreeNode;
const Panel = Collapse.Panel;

class SelectCheckSystem extends Component {
  constructor(){
    super(),
    this.data = []
    this.state= {
      showUncheckSystem:true,
      showCheckedSystem:true
     
    }
  }

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
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

    const ruleOptions = ['组织结构', '数据定义', '数据空间', '反向核验', '字段规则'];
    return (
        <div>
          <div className={styles.select_head} style={{backgroundImage: `url(${titleImg})`}}>
              <div style={{float:'left',width:'400px'}}>
                <img src={selectImg}  className={styles.select_head_img}/>
                <p className={styles.select_head_font}>选择核验系统</p>
              </div>
              <div style={{float:'right'}}>
                   <Link to='/dbCheck/dbChecking' onClick={() => {}}>
                    <Button type="primary" onClick={()=>{}} style={{marginRight:'30px'}}>开始核验</Button>
                  </Link>
                  <Button type="default" onClick={()=>{}}>取消核验</Button>
              </div>
          </div>
          <div className={styles.select_rule}>
             
              <div style={{float:'left'}}><Checkbox >业务系统</Checkbox></div>
              <div style={{float:'right'}}>
                <CheckboxGroup options={ruleOptions} />
              </div>
          </div>

          <div>
            <div className={styles.uncheck_system}>
                <Checkbox ><img src={uncheckImg} />未核验过的系统(3)</Checkbox>
                
                {this.state.showUncheckSystem ==true? <Icon style={{cursor:'pointer'}} type="caret-down" onClick={(item)=>{this.setState({showUncheckSystem:false})}}/> : <Icon style={{cursor:'pointer'}} type="caret-right" onClick={(item)=>{this.setState({showUncheckSystem:true})}}/>}

            </div>
            
            {this.state.showUncheckSystem==true && 

            <div >
              <div className={styles.uncheck_system_item}>
                <div style={{height: '30px',lineHeight:'30px'}}>
                    <Checkbox >人事管理系统</Checkbox>
                </div>
                <div style={{height: '30px',marginLeft:'20px',lineHeight:'30px'}}>
                    <div style={{marginRight:'10px',float:'left'}} ><img src={tablebaseImg} />表空间：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={userImg} />用户：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={tablecountImg}/>表数量：152</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={createtimeImg}/>创建时间：2017-06-09 15:23:30</div>
                </div>

              </div>


              <div className={styles.uncheck_system_item}>
                 <div style={{height: '30px',lineHeight:'30px'}}>
                    <Checkbox >教务管理系统</Checkbox>
                </div>
                <div style={{height: '30px',marginLeft:'20px',lineHeight:'30px'}}>
                    <div style={{marginRight:'10px',float:'left'}} ><img src={tablebaseImg} />表空间：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={userImg} />用户：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={tablecountImg}/>表数量：152</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={createtimeImg}/>创建时间：2017-06-09 15:23:30</div>
                </div>
              </div>

               <div className={styles.uncheck_system_item}>
                 <div style={{height: '30px',lineHeight:'30px'}}>
                    <Checkbox >学工系统</Checkbox>
                </div>
                <div style={{height: '30px',marginLeft:'20px',lineHeight:'30px'}}>
                    <div style={{marginRight:'10px',float:'left'}} ><img src={tablebaseImg} />表空间：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={userImg} />用户：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={tablecountImg}/>表数量：152</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={createtimeImg}/>创建时间：2017-06-09 15:23:30</div>
                </div>
              </div>
            </div>
            }

            

          </div>
          
          <div>
            <div className={styles.uncheck_system}>
                <Checkbox ><img src={checkedImg} />已核验过的系统(3)</Checkbox>
                {this.state.showCheckedSystem ==true? <Icon style={{cursor:'pointer'}} type="caret-down" onClick={(item)=>{this.setState({showCheckedSystem:false})}}/> : <Icon style={{cursor:'pointer'}} type="caret-right" onClick={(item)=>{this.setState({showCheckedSystem:true})}}/>}

            </div>
            
            {this.state.showCheckedSystem==true && 
            <div>
              <div className={styles.uncheck_system_item}>
                <div style={{height: '30px',lineHeight:'30px'}}>
                    <Checkbox >迎新系统</Checkbox>
                </div>
                <div style={{height: '30px',marginLeft:'20px',lineHeight:'30px'}}>
                    <div style={{marginRight:'10px',float:'left'}} ><img src={tablebaseImg} />表空间：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={userImg} />用户：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={tablecountImg}/>表数量：152</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={createtimeImg}/>创建时间：2017-06-09 15:23:30</div>
                </div>

              </div>


              <div className={styles.uncheck_system_item}>
                 <div style={{height: '30px',lineHeight:'30px'}}>
                    <Checkbox >离校系统</Checkbox>
                </div>
                <div style={{height: '30px',marginLeft:'20px',lineHeight:'30px'}}>
                    <div style={{marginRight:'10px',float:'left'}} ><img src={tablebaseImg} />表空间：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={userImg} />用户：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={tablecountImg}/>表数量：152</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={createtimeImg}/>创建时间：2017-06-09 15:23:30</div>
                </div>
              </div>

               <div className={styles.uncheck_system_item}>
                 <div style={{height: '30px',lineHeight:'30px'}}>
                    <Checkbox >组工系统</Checkbox>
                </div>
                <div style={{height: '30px',marginLeft:'20px',lineHeight:'30px'}}>
                    <div style={{marginRight:'10px',float:'left'}} ><img src={tablebaseImg} />表空间：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={userImg} />用户：LYHR</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={tablecountImg}/>表数量：152</div>
                    <div style={{marginRight:'10px',float:'left'}}><img src={createtimeImg}/>创建时间：2017-06-09 15:23:30</div>
                </div>
              </div>
            </div>
            
             }
          </div>

        </div>    
    )
  }
}

export default SelectCheckSystem