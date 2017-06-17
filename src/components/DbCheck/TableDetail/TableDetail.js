import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import styles from './styles.css'

class TableDetail extends Component {
    constructor() {
        super()
    }

    render() {
        const tableData = [
            { name: '人事管理系统', value: 'LY_XXBZ_GXXS' },
            { name: '健康度', value: 92, icon: <Icon type="line-chart" /> },
            { name: '表完整性', value: <Icon type="check-circle-o" />, icon: <Icon type="appstore-o" /> },
            { name: '字段完整性', value: '90%', icon: <Icon type="fork" /> },
            { name: '字段一致性', value: '75%', icon: <Icon type="book" /> }]
        const normalFields = [
            { key: 'XH', value: '学号' },
            { key: 'XM', value: '姓名' },
            { key: 'YWXM', value: '英文姓名' },
            { key: 'XMPY', value: '姓名拼音' }]
        const completeExceptionFields = [
            { key: 'CYM', value: '曾用名' },
            { key: 'XBM', value: '性别码' },
            { key: 'CSRQ', value: '出生日期' }]
        const consistencyExceptionFields = [
            { key: 'CSDM', value: '出生地码' },
            { key: 'JG', value: '籍贯' },
            { key: 'MZM', value: '民族码' },
            { key: 'SFZHM', value: '身份证号码' }]
        const hoverTable = {
            head: ['','标准','物理表'],
            body: [
                ['字段名称', 'XXM', 'XXM'],
                ['中文简称', '姓名', '姓名'],
                ['类型', 'C', 'C'],
                ['长度', 36, 20],
                ['是否为空', '否', '否'],
                ['是否主键', '否', '否']
            ]


        }
        return (
            <div style={{ padding: 20 }}>
                <div className={`${styles.headBoxContainer}`}>
                    {tableData.map((tabdata, index) => {
                        index++;
                        return (
                            <div className={`${styles.headBox} ${styles['headBox_' + index]}`}  key={index}>
                                <div className={`${styles.headBoxLeft}`}>
                                    <p className={styles.headBoxLeftItem}>{tabdata.name}</p>
                                    <p className={styles.headBoxLeftItem}>{tabdata.value}</p>
                                </div>
                                {tabdata.icon && <div className={`${styles.headBoxRight}`}>{tabdata.icon}</div>}
                            </div>

                        )
                    })
                    }
                </div>
                <div className={`${styles.detailBody}`}>
                    <div className={`${styles.detailTitle}`}>
                        <p>
                            <span style={{ fontSize: '20px', color: "RGB(3,169,245)", fontWeight: 'bold' }}><Icon type="line-chart" /> 健康状况 </span>
                            <span>
                                存在
                                <span style={{ color: "RGB(255,127,116)" }}>3</span>
                                个字段完整性问题，
                                <span style={{ color: "RGB(255,127,116)" }}>5</span>
                                个字段一致性问题</span>
                        </p>
                    </div>
                    <div className={`${styles.detailItem}`}>
                        <div className={`${styles.detailSubTitle}`}>
                            <span style={{ fontSize: '16px', color: "RGB(3,169,245)", fontWeight: 'bold' }}><Icon type="bars" /> 正常</span>
                        </div>
                        <div className={`${styles.fieldBoxContainer} ${styles.fieldBoxContainer_1}`}>
                            {normalFields.map((field, index) => (
                                <div className={`${styles.fieldBox}`} key={index}>
                                    <div>{field.key}</div>
                                    <div>{field.value}</div>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                    <div className={`${styles.detailItem}`}>
                        <div className={`${styles.detailSubTitle}`}>
                            <span style={{ fontSize: '16px', color: "RGB(3,169,245)", fontWeight: 'bold' }}><Icon type="bars" /> 完整性异常</span>
                        </div>
                        <div className={`${styles.fieldBoxContainer} ${styles.fieldBoxContainer_2}`}>
                            {completeExceptionFields.map((field, index) => (
                                <div className={`${styles.fieldBox}`} key={index}>
                                    <div>{field.key}</div>
                                    <div>{field.value}</div>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                    <div className={`${styles.detailItem}`}>
                        <div className={`${styles.detailSubTitle}`}>
                            <span style={{ fontSize: '16px', color: "RGB(3,169,245)", fontWeight: 'bold' }}><Icon type="bars" /> 一致性异常</span>
                        </div>
                        <div className={`${styles.fieldBoxContainer} ${styles.fieldBoxContainer_3}`}>
                            {consistencyExceptionFields.map((field, index) => (
                                <div className={`${styles.fieldContent}`} key={index}>
                                    <div className={styles.hoverTable}>
                                        <p>
                                            <span style={{color:'RGB(23,111,244)',fontWeight:'bold'}}><Icon type="folder" />描述 </span>
                                            <span style={{backgroundColor:'RGB(146,192,252)',color:'white'}}>物理库字段长度与标准不符</span>
                                        </p>
                                        <table>
                                            <thead>
                                            <tr>
                                                {hoverTable.head.map((head,index) => (
                                                    <th key={index}>{head}</th>
                                                ))}
                                            </tr>
                                            </thead>
                                            <tbody> 
                                            {hoverTable.body.map((itemAtrray,index) => (
                                                <tr key={index}>
                                                    {itemAtrray.map((item) => (
                                                        <td>{item}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                            </tbody> 
                                        </table>
                                    </div>
                                    <div className={`${styles.fieldBox}`}>
                                        <div>{field.key}</div>
                                        <div>{field.value}</div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>



                </div>
            </div>




        )
    }
}



export default TableDetail