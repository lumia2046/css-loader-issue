import React from 'react'
import { Table, Input, Icon, Button, Popconfirm } from 'antd';

export default class AddOIDialogContent4 extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '字段',
            dataIndex: 'zd',
            width: '30%',
        }, {
            title: '字段描述',
            dataIndex: 'zdms',
            width: '30%',
        }, {
            title: ' ',
            dataIndex: 'operation',
            width: '10%',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 0 ?
                        (<button onClick={this.onDelete} >delete</button>) : null
                );
            },
        }];

        this.state = {
            dataSource: [{
                key: '0',
                zd: <Input/>,
                zdms: <Input/>,
            }],
            count: 1,
        };
    }
   
    onDelete = (index) => {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ dataSource });
    }
    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            zd: <Input/>,
            zdms: <Input/>,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <p>参数定义:</p>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <Table bordered dataSource={dataSource} columns={columns} pagination={false} style={{width: '601px'}}/>
            </div>
        );
    }
}

