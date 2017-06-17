import React from 'react'
import { Table, Input, Icon, Button, Popconfirm, Select } from 'antd';
import Styles from './OutInterfaceManagerTab.css'
export default class AddOIDialogContent5 extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '字段名',
            dataIndex: 'zdm',
            width: '10%',
        }, {
            title: '比较符',
            dataIndex: 'bjf1',
            width: '10%',
        }, {
            title: '字段描述',
            dataIndex: 'zdms',
            width: '10%',
        },{
            title: '比较符',
            dataIndex: 'bjf2',
            width: '10%',
        }, {
            title: ' ',
            dataIndex: 'operation',
            width: '10%',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 0 ?
                        (<button onClick={this.onDelete} >删除</button>) : null
                );
            },
        }];

        this.state = {
            dataSource: [{
                key: '0',
                zdm:<Select defaultValue="字段名" style={{ width: 120 }} >
                    <Option value="lucy">Lucy</Option>
                    </Select>,
                bjf1:<Select defaultValue="比较符" style={{ width: 120 }} >
                    <Option value="lucy">Lucy</Option>
                    </Select>,
                zdms:<Select defaultValue="字段描述" style={{ width: 120 }} >
                    <Option value="lucy">Lucy</Option>
                    </Select>,
                bjf2:<Select defaultValue="AND" style={{ width: 120 }} >
                    <Option value="lucy">Lucy</Option>
                    </Select>,
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
                zdm:<Select defaultValue="字段名" style={{ width: 120 }} >
                    <Option value="id">id</Option>
                    </Select>,
                bjf1:<Select defaultValue="比较符" style={{ width: 120 }} >
                    <Option value="lucy">Lucy</Option>
                    </Select>,
                zdms:<Select defaultValue="字段描述" style={{ width: 120 }} >
                    <Option value="lucy">Lucy</Option>
                    </Select>,
                bjf2:<Select defaultValue="AND" style={{ width: 120 }} >
                    <Option value="lucy">Lucy</Option>
                    </Select>,
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
                <p className={Styles.content5_p_gltj}>过滤条件:</p>
                <p className={Styles.content5_p_pptj}>匹配条件:</p>
                <Button className="content5_btn_add_pptj" onClick={this.handleAdd} >+</Button>
                <Table  dataSource={dataSource}
                    showHeader={false}
                    columns={columns}
                    pagination={false}
                    className={Styles.content5_table_sty}
                    scroll={{ y: 250 }} />
                <font className={Styles.content5_font_cxyl}>查询预览:</font>
                <div className={Styles.content5_div_cxyl}>
                        13123
                </div>
            </div>
        );
    }
}

