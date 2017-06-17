import { Table, Row, Col, Icon } from 'antd';
import React from 'react';
import AddOIDialogContent2Form from './AddOIDialogContent2Form'
import Styles from './OutInterfaceManagerTab.css'

export default class AddOIDialogContent2 extends React.Component {

   constructor(props){
       super(props)
     this.state = {
     dataRight: [{
            key: '1',
            dataSource: 'John Brown',
            table: '123'
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
        }]
    }
   }

    
  

    onDelete = (index) => {
        const dataRight = [...this.state.dataRight];
        dataRight.splice(index, 1);
        this.setState({ dataRight });
    }

    handleRight =() =>{
        alert(111)
    }

    render() {
        //=================左边表格的column和data=======================
        const columnsLeft = [{
            title: '数据表',
            dataIndex: 'table',
        }];

        const dataLeft = [{
            key: '1',
            table: 'John Brown',
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
        //==================右边表格的column和data======================
        const columnsRight = [{
            title: '数据源',
            dataIndex: 'dataSource',
        }, {
            title: '数据表',
            dataIndex: 'table',
        }, {
            title: ' ',
            dataIndex: 'operation',
            render: (text, record, index) => {
                return (
                    this.state.dataRight.length > 1 ?
                        (<button onClick={this.onDelete} >delete</button>) : null
                );
            },
        }];

        const { dataRight } = this.state;

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
            <Row gutter={16}>
                <Col span='8'>
                    <p className={Styles.xzlb_font_style}>选择列表:</p>
                    <div style={{
                        height: '144px', width: '330px', borderRight: ' 1px solid rgb(204, 204, 204)'
                        , borderTop: ' 1px solid rgb(204, 204, 204)', borderLeft: ' 1px solid rgb(204, 204, 204)'
                        , margin: '69px  0px 0px 64px'
                    }}>
                        <AddOIDialogContent2Form></AddOIDialogContent2Form>

                    </div>
                    <Table 
                    rowSelection={rowSelection} 
                    columns={columnsLeft} 
                    dataSource={dataLeft} 
                    className={Styles.content2_table1_style} 
                    pagination={false} 
                    bordered />
                </Col>
                <Col span='4' className={Styles.content2_btn_sty} ><button style={{ height: '70px', width: '50px' }} onClick={this.handleRight}><Icon type="caret-right" /></button></Col>
                <Col span='8' >
                    <p >已选列表:</p>
                    <Table columns={columnsRight} dataSource={dataRight} className={Styles.content2_table2_style} pagination={false} bordered />
                </Col>
            </Row>



        </div>)
    }
}