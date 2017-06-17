import { Table, Row, Col, Icon,Input,Select,Button } from 'antd';
import React from 'react';
import Styles from './OutInterfaceManagerTab.css'

export default class AddOIDialogContent3 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataRight: [{
                key: '1',
                dataSource: 'John Brown',
                table: '123',
                children: [{
                    key: 11,
                    name: 'John Brown',
                    age: 42,
                    address: 'New York No. 2 Lake Park',
                }]
            }, {
                key: '2',
                dataSource: 'Jim Green',
                table: '123'
            }, {
                key: '3',
                dataSource: 'Joe Black',
                table: '123'
            }, {
                key: '4',
                dataSource: 'Disabled User',
                table: '123'
            }],
        dataGLGX:[{
            key:'0',
            b1:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
            glgx:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
            b2:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
            ON:"ON",
            b1zd:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
            bjf:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
            b2zd:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
        }],
        countGLGX:1,
        }
    }
 

    onDelete = (index) => {
        const dataRight = [...this.state.dataRight];
        dataRight.splice(index, 1);
        this.setState({ dataRight });
    }

     onDeleteRL = (index) => {
        const dataGLGX = [...this.state.dataGLGX];
        dataGLGX.splice(index, 1);
        this.setState({ dataGLGX });
    }

    handleAddRL = () => {
        const { countGLGX, dataGLGX } = this.state;
        const newData = {
            key: countGLGX,
             b1:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
            glgx:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
            b2:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
            ON:"ON",
            b1zd:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
            bjf:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
            b2zd:(<Select style={{ width: 110 }}>
              <Option value="male">LY_TABLE1</Option>
              <Option value="female">LY_TABLE2</Option>
            </Select>),
        };
        this.setState({
            dataGLGX: [...dataGLGX, newData],
            countGLGX: countGLGX + 1,
        });
    }



    render() {
        const { dataRight,dataGLGX } = this.state;
        //=================左边表格的column和data=======================
        const columnsLeft = [{
            title: '表名/字段名',
            dataIndex: 'table',
        }];

        const dataLeft = [{
            key: '1',
            table: 'LY_TABLE1',
            children:[{
                key:'11',
                table:'Column1'
            },{
                key:'12',
                table:'Column2'
            },{
                key:'13',
                table:'Column3'
            }]
        }, {
            key: '2',
            table: 'Jim Green',
        }, {
            key: '3',
            table: 'Joe Black',
        }, {
            key: '4',
            table: 'Disabled User',
        }];
        //==================右边表格的column======================
        const columnsRight = [{
            title: '数据表',
            dataIndex: 'table',
            width:'60%'
        }, {
            title: ' ',
            width:'20%',
            dataIndex: 'operation',
            render: (text, record, index) => {
                return (
                    this.state.dataRight.length > 0 ?
                        (<button onClick={this.onDelete} style={{backgroundColor:'rgb(255,91,89)',border:'0'}} shape='circle' ><Icon type="minus-circle-o" style={{color:'rgb(255,91,89)'}} /></button>) : null
                );
            },
        }];
        //================下方表格的column===========================
        const columnsGLGX = [{
            title: '表1',
            dataIndex: 'b1',
            width:'10%'
        },{
            title: '关联关系',
            dataIndex: 'glgx',
            width:'10%'
        },{
            title: '表2',
            dataIndex: 'b2',
            width:'10%'
        },{
            title: ' ',
            dataIndex: 'ON',
            width:'5%'
        },{
            title: '表1字段',
            dataIndex: 'b1zd',
            width:'10%'
        },{
            title: '比较符',
            dataIndex: 'bjf',
            width:'10%'
        },{
            title: '表2字段',
            dataIndex: 'b2zd',
            width:'10%'
        },{
            title: '  ',
            dataIndex: 'cz',
            width:'10%',
            render: (text, record, index) => {
                return (
                    this.state.dataGLGX.length > 0 ?
                        (<button onClick={this.onDeleteRL} style={{backgroundColor:'rgb(255,91,89)',width:'20px',border:'0'}} shape='circle' ><Icon type="minus-circle-o"  /></button>) : null
                );
            }
        }];

        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',    // Column configuration not to be checked
            }),
        };



        return (<div>
            <p className={Styles.content3_p1} style={{float:'left'}}>已选字段:</p>
            <Table 
            className={Styles.content3_table1}
            rowSelection={rowSelection} 
            columns={columnsLeft} 
            dataSource={dataLeft} 
            pagination={false}
            scroll={{ y: 180 }} 
            bordered />

            <button  className={Styles.content3_btn1_sty}><Icon type="right-square" /></button>

            <p className={Styles.content3_p2}>可选字段:</p>
            <Table 
            className={Styles.content3_table2}
            columns={columnsRight} 
            dataSource={dataRight} 
            pagination={false} 
            scroll={{ y: 180 }}
            bordered />

        <p className={Styles.content3_p3}>关联关系:</p>

        <Button className={Styles.content3_btn2_sty} onClick={this.handleAddRL } shape='circle' ><Icon type="plus-circle" /></Button>
            <Table 
            className={Styles.content3_table3}
            columns={columnsGLGX} 
            dataSource={dataGLGX} 
            pagination={false} 
            bordered 
            scroll={{ y: 150 }}/>
        </div>) 
    }
}