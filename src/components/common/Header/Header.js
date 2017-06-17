import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import prefix from '../../../utils/routePrefix'
import styles from './styles.css'
import fwzx from './images/fwzx.png'
import home from './images/home.png'
import lssjk from './images/lssjk.png'
import sjck from './images/sjck.png'
import sjkhy from './images/sjkhy.png'
import sjkjk from './images/sjkjk.png'
import xtgl from './images/xtgl.png'
import ywsjk from './images/ywsjk.png'
import logo from './images/logo.png'
import {changeMenuState} from '../../../actions'


export default class Header extends React.Component {


  changeColor = (index,dispatch) => {
  	dispatch(changeMenuState(index))
  }
  componentWillMount(){
    console.log('componentWillMount');
  }
  componentWillUpdate(){
    console.log('componentWillMount');
  }
  render() {
  const {dispatch,menuState} = this.props
  console.log(styles)

	let clickStyle = {borderTop:'5px RGB(255,201,111) solid',background:'RGB(5,125,188)'}

	let boxTitles = ['系统管理','服务中心管理','数据库核验','数据库监控','数据仓库','历史数据库','业务数据库','首页']

	let boxImgs = [xtgl,fwzx,sjkhy,sjkjk,sjck,lssjk,ywsjk,home]

	let boxHrefs = ['system','serviceManager','dbCheck','dbMonitor','dataWarehouse','historyDb','businessDb','index']

    return (
      <div className={styles.container}>
           <img src={logo}/>
          {boxTitles.map((boxTitle,i) => 
			<Link key={i} to={`${prefix}/${boxHrefs[i]}/index`} onClick={() => {
				this.changeColor(i,dispatch)
          	}}>
                <span className={`${styles.block} ${styles.option}`} style={menuState.data[i]?clickStyle:{}}>
                  <img src={boxImgs[i]}/>
                  <div>{boxTitle}</div>
                </span>   
          	</Link>
          )}      
      </div>
      
    );
  }
}


