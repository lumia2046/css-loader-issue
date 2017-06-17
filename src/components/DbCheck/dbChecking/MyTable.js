import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd';
import mainTable from './mainTable.json'
import detailTable from './detailTable.json'

class MyTable extends Component {
    constructor(){
        super()
    }

    render() {
        const columns = [{
                        title: '业务系统',
                        dataIndex: 'name',
                        key: 'name',
                        width: '95%',
                    }];
        const data = mainTable.data

        const expandedRowRender = () => {
            const columns = [
                { title: 'Date', dataIndex: 'date', key: 'date' },
                { title: 'Name', dataIndex: 'name', key: 'name' }
            ];
            const data = [];
            for (let i = 0; i < 3; ++i) {
            data.push({
                key: i,
                date: '2014-12-24 23:12:00',
                name: 'This is production name'
            });
            }
            return (
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
            );
        };

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
        };
        const defaultExpandedRowKeys = [1]
        return (
            <Table defaultExpandedRowKeys={defaultExpandedRowKeys} 
                   columns={columns} 
                   rowSelection={rowSelection} 
                   dataSource={data}
                   expandedRowRender={expandedRowRender}
                   />
        )
    }
}

export default MyTable
