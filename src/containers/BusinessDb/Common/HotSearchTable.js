import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import css from '../CSS/BusinessDb.css'


import XTSJFB_ICON from '../Image/XTSJFB_ICON.png'
import RMSSB_ICON from '../Image/RMSSB_ICON.png'
import RMSSBLEFT_IMG from '../Image/RMSSBLEFT_IMG.png'
import RMSSBRIGHT_IMG from '../Image/RMSSBRIGHT_IMG.png'


const HotSearchTable = React.createClass({
    render() {

        let tableData = [
            { tableName: 'test1' },
            { tableName: 'test2' },
            { tableName: 'test3' },
            { tableName: 'test4' },
            { tableName: 'test5' },
            { tableName: 'test6' },
            { tableName: 'test7' },
            { tableName: 'test8' },
            { tableName: 'test9' },
            { tableName: 'test10' },
            { tableName: 'test11' },
            { tableName: 'test12' },
            { tableName: 'test13' },
            { tableName: 'test14' }
        ]
        {/* (i%2 == 1 && ', clear: float') */ }
        return (
            <div >
                <div className={css.echartsHead}><img src={RMSSB_ICON} /><font>热门数据表</font></div>
                <div style={{ backgroundColor: '#FFFFFF', width: '100%'}} >
                    {
                        tableData.map((table, i) =>
                            <div key={i} className={css.hotDataTable} style={{ width: '50%', float: 'left' }}>
                                <img src={i % 2 == 0 ? RMSSBLEFT_IMG : RMSSBRIGHT_IMG} /><a href='#'>{table.tableName}</a>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
});

export default HotSearchTable;