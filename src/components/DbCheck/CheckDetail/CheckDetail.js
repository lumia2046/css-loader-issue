import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import TableDetail from '../TableDetail/TableDetail'

class CheckDetail extends Component {
    constructor() {
        super()
    }

    render() {
        const { hashUrl, commonTable, dispatch } = this.props;
        const currentIndex = hashUrl.currentUrl.split('/')[hashUrl.currentUrl.split('/').length - 1]
        const columns = [
            {
                title: '表名',
                key: 'tableName',
                dataIndex: 'tableName'
            }, {
                title: '字段数',
                dataIndex: 'columnNum',
                key: 'columnNum'
            }, {
                title: '表完整性',
                dataIndex: 'tableIntegrality',
                key: 'tableIntegrality'
            }, {
                title: '字段完整性',
                dataIndex: 'columnIntergrality',
                key: 'columnIntergrality'
            }, {
                title: '字段一致性',
                dataIndex: 'columnConsistency',
                key: 'columnConsistency'
            }, {
                title: '操作',
                key: 'action',
                render: (text, record, index) => {
                    if (text.children || text.hiddenButton) {
                        return (<p></p>)
                    } else {
                        return (
                            <Link key={index} to={`/dbCheck/detail/${text.tableName}`} onClick={() => { }}>
                                <Button type="primary" onClick={() => {
                                   
                                }}>
                                    同步脚本
                            </Button>
                            </Link>
                        )
                    }
                }


            }
        ];

        const data = [{
            key: 'a',
            tableName: "小计",
            columnNum: 2100,
            columnIntergrality: 125,
            columnConsistency: 98,
            hiddenButton:true
        },
        {
            key: 1,
            tableName: "人事管理系统",
            children: [{
                key: 11,
                tableName: "LY_RSGL_XT",
                columnNum: "20",
                tableIntegrality: <Icon type='check-circle-o' />,
                columnIntergrality: "6",
                columnConsistency: "7"
            }, {
                key: 12,
                tableName: "LY_RSGL_XT",
                columnNum: "20",
                tableIntegrality: <Icon type='check-circle-o' />,
                columnIntergrality: "6",
                columnConsistency: "7"
            }, {
                key: 13,
                tableName: "LY_RSGL_XT",
                columnNum: "20",
                tableIntegrality: <Icon type='check-circle-o' />,
                columnIntergrality: "6",
                columnConsistency: "7"
            }, {
                key: 14,
                tableName: "LY_RSGL_XT",
                columnNum: "20",
                tableIntegrality: <Icon type='check-circle-o' />,
                columnIntergrality: "6",
                columnConsistency: "7"
            }, {
                key: 15,
                tableName: "LY_RSGL_XT",
                columnNum: "20",
                tableIntegrality: <Icon type='check-circle-o' />,
                columnIntergrality: "6",
                columnConsistency: "7"
            }]
        }, {
            key: 2,
            tableName: "教务管理系统",
            children: [{
                key: 21,
                tableName: "LY_RSGL_XT",
                columnNum: "20",
                tableIntegrality: <Icon type='check-circle-o' />,
                columnIntergrality: "6",
                columnConsistency: "7",
                action: "同步脚本"
            }, {
                key: 22,
                tableName: "LY_RSGL_XT",
                columnNum: "20",
                tableIntegrality: <Icon type='check-circle-o' />,
                columnIntergrality: "6",
                columnConsistency: "7",
                action: "同步脚本"
            }, {
                key: 23,
                tableName: "LY_RSGL_XT",
                columnNum: "20",
                tableIntegrality: <Icon type='check-circle-o' />,
                columnIntergrality: "6",
                columnConsistency: "7",
                action: "同步脚本"
            }, {
                key: 24,
                tableName: "LY_RSGL_XT",
                columnNum: "20",
                tableIntegrality: <Icon type='check-circle-o' />,
                columnIntergrality: "6",
                columnConsistency: "7",
                action: "同步脚本"
            }, {
                key: 25,
                tableName: "LY_RSGL_XT",
                columnNum: "20",
                tableIntegrality: <Icon type='check-circle-o' />,
                columnIntergrality: "6",
                columnConsistency: "7",
                action: "同步脚本"
            }]
        }
        ];
        const url = "http://xxxx.com";
        const pageSize = 10;
        const pagination = data
            ? {
                total: data.length,
                current: 1,
                pageSize: pageSize
            }
            : {}
        const tableData = data
            ? {
                columns,
                data,
                pagination,
                pageSize,
                url
            }
            : {
                columns,
                pageSize,
                url
            }

        return (
            <div style={{ background: 'white' }}>

                {hashUrl.currentUrl.indexOf('/dbCheck/detail') > -1 && hashUrl.currentUrl.indexOf('/dbCheck/detail/') < 0 &&
                    <div>
                        <div style={{ background: "#E5E5E5", height: '43px', lineHeight: '43px', paddingLeft: '20px' }}>
                            <img src={app} />
                            <span style={{ fontSize: '16px', background: "#E5E5E5", color: "#03a9f5", marginLeft: '10px' }}>应用管理</span>
                        </div>
                        <div style={{ padding: '0px 40px' }}>

                            <div style={{ fontSize: "14px", height: '76px', lineHeight: '76px' }}>
                                业务系统 :  <Input size="default" style={{ width: '9%', margin: '0 10px' }} />
                                表名:  <Input style={{ width: '9%', margin: '0 10px' }} />
                                <Button type="primary" icon="search" style={{ left: "3%" }}>查询</Button>
                                <Button type="Default" icon="search" style={{ left: "3.5%" }}>重置</Button>
                                <div style={{ float: "right" }}>
                                    <Button type="primary" style={{ marginRight: '10px' }}>更新</Button>
                                    <Button type="warning" style={{ marginRight: '10px' }}>修改</Button>
                                    <Button type="danger" style={{}}>删除</Button>
                                </div>

                            </div>

                            <div>
                                <CommonTable {...({ tableData, commonTable, dispatch }) } />

                            </div>
                        </div>
                    </div>
                }

                {hashUrl.currentUrl.indexOf('/dbCheck/detail/') > -1 && <TableDetail />}

            </div>

        )
    }
}

function mapStateToProps(state) {
    const { hashUrl } = state
    return { hashUrl }
}

export default connect(mapStateToProps)(CheckDetail)