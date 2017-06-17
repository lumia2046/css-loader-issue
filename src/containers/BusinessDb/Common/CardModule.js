import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../actions'
import { Layout, Row, Col, Button, Input, Upload, Icon, Modal, message } from 'antd'
import Header from '../../../components/common/Header/Header'
import css from './../CSS/BusinessDb.css';

import bgimage from './../Image/bgimage.png';

import SAVE_ICON from '../Image/SAVE_ICON.png'
import EDIT_ICON from '../Image/EDIT_ICON.png'
import STAR_ICON from '../Image/STAR_ICON.png'
import mobile_ICON from './../Image/mobile_icon.png';
import IPAddr_ICON from './../Image/IPAddr_ICON.png';
import CreateTime_ICON from './../Image/CreateTime_ICON.png';

import getSize from '../../../utils/getSize'


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class CardModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divStatus: 'save'
    }
  }

  changeDivContent(divStatus) {
    // 'save' != this.state[divStatus] ? this.state[divStatus]='save' : this.state[divStatus]='edit';
    this.setState({
      divStatus: divStatus
    })

    // 当点击save的时候触发事件
    if (divStatus == 'save') {
      // alert(divStatus);

    }
  }
 

  handleChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
    }
  }

  render() {
    var cardData = this.props.initObj;
    var imgs = [];
    var divStatus = this.state.divStatus;
    const imageUrl = this.state.imageUrl;

    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div className={css.antCol8}>
        <div className={css.antCard}>

          {
            this.state.divStatus == 'save' &&
            <div>
              <div className={css.antCardHead}>
                <div className={css.antCardHeadTitleLeft}><img src={cardData.icon} width="20px" height="20px" />
                  <font>{cardData.systemName}</font>
                </div>
                <div className={css.antCardHeadTitleRight}><a onClick={this.changeDivContent.bind(this, 'edit')}><img src={EDIT_ICON} width="20px" height="20px" /></a></div>
              </div>
              <Link to={cardData.linkTo} onClick={() => { }} style={{ color: '#000000' }}>
                <div className={css.antCardBody}>
                  <div className={css.antCardBodyDiv} style={{ backgroundImage: `url(${bgimage})` }}>
                    <div className={css.antCardBodyDivLeft}><img src={cardData.cslogo} width="120" height="120" /></div>
                    <div className={css.antCardBodyDivRight}>
                      <ul>
                        <ol><img src={mobile_ICON} width="15px" height="15px" />联系方式：{cardData.mobile}</ol>
                        <ol><img src={IPAddr_ICON} width="15px" height="15px" />IP地址：{cardData.IPAddr}</ol>
                        <ol><img src={CreateTime_ICON} width="15px" height="15px" />创建时间：{cardData.CreateTime}</ol>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          }

          {
            this.state.divStatus == 'edit' &&
            <div>
              <div className={css.antCardHead}>
                <div className={css.antCardHeadTitleLeft}><img src={cardData.icon} width="20px" height="20px" />
                  <font>{cardData.systemName}</font>
                </div>
                <div className={css.antCardHeadTitleRight}><a onClick={this.changeDivContent.bind(this, 'save')}><img src={SAVE_ICON} width="20px" height="20px" /></a></div>
              </div>
              <div className={css.antCardBody}>
                <div className={css.antCardBodyDiv}>
                  <div className={css.antCardBodyDivEdit}>
                    <ul>
                      <ol><img src={mobile_ICON} width="15px" height="15px" />联系方式：<Input style={{ width: '50%', borderRadius: '20px' }} placeholder="13800138000" /></ol>
                      <ol><img src={IPAddr_ICON} width="15px" height="15px" />&nbsp;&nbsp;&nbsp;&nbsp;IP地址：<Input style={{ width: '50%', borderRadius: '20px' }} placeholder="192.168.100.100" /></ol>
                      <ol>
                        <div style={{ float: 'left' }}><img src={STAR_ICON} width="15px" height="15px" />厂商Logo：</div>
                        <Upload className="avatar-uploader" name="cslogo" showUploadList={false} action="//jsonplaceholder.typicode.com/posts/" beforeUpload={beforeUpload} onChange={this.handleChange}>
                          { imageUrl ? <img src={imageUrl} alt="" className="avatar" /> : <Icon type="plus" className="avatar-uploader-trigger" /> }
                        </Upload>
                      </ol>
                      <ol>
                        <div style={{ clear: 'left', float: 'left' }}><img src={STAR_ICON} width="15px" height="15px" />系统Logo：</div>
                        <Upload className="avatar-uploader" name="xtlogo" showUploadList={false} action="//jsonplaceholder.typicode.com/posts/" beforeUpload={beforeUpload} onChange={this.handleChange}>
                          { imageUrl ? <img src={imageUrl} alt="" className="avatar" /> : <Icon type="plus" className="avatar-uploader-trigger" /> }
                        </Upload>
                      </ol>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          }

        </div>
      </div>
    )
  }
}


export default CardModule;
