import React from 'react'
import Styles from './OutInterfaceManagerTab.css'

export default class AddOIDialogContent6 extends React.Component{
    render(){
        return (<div>
            <font>接口信息预览:</font>
            <hr size='1' className={Styles.content6_hr1} />
            <div className={Styles.content6_div1}>
                <br/>
                接口名称:<p>getStudnet</p>
                接口标签:<p>获取学生信息</p>
                接口描述:<p>根据年级想象中覅都是哦哦</p>
            </div>
            <div className={Styles.content6_div2}>
                <br/>
                数据源:<p>DataSource</p>
                SQL语句:<p>select uuid from xxxx</p>
            
            </div>
             <hr size='1' className={Styles.content6_hr2} />
             <br/>
             <p className={Styles.content6_p_cs}>参数一:学生id 参数二:学生年龄 参数三:学生班级</p>

        </div>)
    }
}