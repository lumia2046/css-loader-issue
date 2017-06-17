import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Row,Col } from 'antd'
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';


import css from './checkAnalyse.css'
import prefix from '../../../utils/routePrefix'
import getSize from '../../../utils/getSize'

import nocheckImg from '../images/nocheck.png'
import newcheckImg from '../images/newcheck.png'
import oldcheckImg from '../images/oldcheck.png'
import hrImg from '../images/hr.png'

const CheckAnalyse = React.createClass({
  propTypes: {
  },
  getOtion:function (value) {
        const option = {
            tooltip : {
              formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
              {
                  name: '健康度',
                  type: 'gauge',
                  radius: '95%',
                  detail: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontSize: 12,
                      }
                  },
                  data: [{value: value, name: '完成率'}],
                  axisLine: {            // 坐标轴线   
                       lineStyle: {       // 属性lineStyle控制线条样式   
                          color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']],   
                          width: 8  
                      }  
                  },
                  axisTick: {            // 坐标轴小标记   
                      splitNumber: 10,   // 每份split细分多少段   
                      length :10,        // 属性length控制线长   
                      lineStyle: {       // 属性lineStyle控制线条样式   
                         color: 'auto'  
                      }  
                  },  
                  axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel   
                      textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE   
                          color: 'auto'  
                      }  
                  },  
                  splitLine: {           // 分隔线   
                      show: true,        // 默认显示，属性show控制显示与否   
                      length :15,         // 属性length控制线长   
                      lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式   
                          color: 'auto'  
                      }  
                  },  
                  pointer : {  
                      width : 5  
                  },  
                  title : {  
                    show : true,  
                    offsetCenter: [0, '60%'],       // x, y，单位px   
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE   
                        fontSize: 12,
                    }  
                  }
              }
          ]
        };
        return option;
    },
  render(){
 
    return (
      <div>
          <Row>
            <Col span={24}>
              <div className={css.data_block}>
                  <div className={css.data_block_chardiv}>
                    <div className={css.data_block_chardiv_img}>
                        <img src={newcheckImg} />
                    </div>

                    <ReactEcharts option={this.getOtion(50)} style={{ height: 190,width:200 }} />
                  </div>

                  <div className={css.data_block_countdiv}>
                    <div>
                      <img src={hrImg} /> <span className={css.data_block_countdiv_system}>人事管理系统</span>
                    </div>
                    <div className={css.data_block_countdiv_desc}>
                        合格：<span className={css.data_block_countdiv_hg}></span>
                        不合格：<span className={css.data_block_countdiv_bhg}></span>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>组织结构</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'60%'}} title="732" className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'40%'}} title="332" className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>80%</div>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>数据定义</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'70%'}} title="812" className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'30%'}}  title="232" className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>85%</div>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>数据空间</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'50%'}} title="432" className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'50%'}}  title="432" className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>50%</div>
                    </div>
                  </div>
                  
              </div>

              <div className={css.data_block}>
                  <div className={css.data_block_chardiv}>
                    <div className={css.data_block_chardiv_img}>
                        <img src={nocheckImg} />
                    </div>

                    <ReactEcharts option={this.getOtion(60)} style={{ height: 190,width:200 }} />
                  </div>

                  <div className={css.data_block_countdiv}>
                    <div>
                      <img src={hrImg} /> <span className={css.data_block_countdiv_system}>教务管理系统</span>
                    </div>
                    <div className={css.data_block_countdiv_desc}>
                        合格：<span className={css.data_block_countdiv_hg}></span>
                        不合格：<span className={css.data_block_countdiv_bhg}></span>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>组织结构</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'60%'}} className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'40%'}} className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>80%</div>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>数据定义</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'70%'}} className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'30%'}}  className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>85%</div>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>数据空间</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'50%'}} className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'50%'}}  className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>50%</div>
                    </div>
                  </div>
                  
              </div>

             <div className={css.data_block}>
                  <div className={css.data_block_chardiv}>
                    <div className={css.data_block_chardiv_img}>
                        <img src={oldcheckImg} />
                    </div>

                    <ReactEcharts option={this.getOtion(70)} style={{ height: 190,width:200 }} />
                  </div>

                  <div className={css.data_block_countdiv}>
                    <div>
                      <img src={hrImg} /> <span className={css.data_block_countdiv_system}>财务管理系统</span>
                    </div>
                    <div className={css.data_block_countdiv_desc}>
                        合格：<span className={css.data_block_countdiv_hg}></span>
                        不合格：<span className={css.data_block_countdiv_bhg}></span>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>组织结构</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'60%'}} className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'40%'}} className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>80%</div>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>数据定义</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'70%'}} className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'30%'}}  className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>85%</div>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>数据空间</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'50%'}} className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'50%'}}  className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>50%</div>
                    </div>
                  </div>
                  
              </div>

              <div className={css.data_block}>
                  <div className={css.data_block_chardiv}>
                    <div className={css.data_block_chardiv_img}>
                        <img src={newcheckImg} />
                    </div>

                    <ReactEcharts option={this.getOtion(75)} style={{ height: 190,width:200 }} />
                  </div>

                  <div className={css.data_block_countdiv}>
                    <div>
                      <img src={hrImg} /> <span className={css.data_block_countdiv_system}>科研管理系统</span>
                    </div>
                    <div className={css.data_block_countdiv_desc}>
                        合格：<span className={css.data_block_countdiv_hg}></span>
                        不合格：<span className={css.data_block_countdiv_bhg}></span>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>组织结构</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'60%'}} className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'40%'}} className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>80%</div>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>数据定义</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'70%'}} className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'30%'}}  className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>85%</div>
                    </div>
                    <div className={css.data_block_countdiv_itemname}>数据空间</div>
                    <div className={css.data_block_countdiv_item}>
                      <div className={css.data_block_countdiv_item_icon}>
                        <div style={{width:'50%'}} className={css.data_block_countdiv_item_hg}></div>
                        <div style={{width:'50%'}}  className={css.data_block_countdiv_item_bhg}></div>
                      </div>
                      <div className={css.data_block_countdiv_item_hgl}>50%</div>
                    </div>
                  </div>
                  
              </div>

              <div style={{background:'white',width:'360px',height:'220px',float:'left',marginRight:'20px',marginBottom:'20px'}}>
                  
              </div>

              <div style={{background:'white',width:'360px',height:'220px',float:'left',marginRight:'20px',marginBottom:'20px'}}>
                  
              </div>
            </Col>
            
          </Row>
      </div>  
    )
  }
});

export default CheckAnalyse