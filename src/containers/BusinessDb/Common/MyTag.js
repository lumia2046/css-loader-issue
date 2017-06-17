import {Tag} from 'antd';
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import css from '../CSS/BusinessDb.css'

const CheckableTag = Tag.CheckableTag;
const tagsFromServer = ['学生', '学历', '图书', '学工', '财务'];

class MyTag extends React.Component {

  state = {
    selectedTags: []
  };

  handleChange(tag, checked) {
    const {selectedTags} = this.state;
    const nextSelectedTags = checked
      ? [
        ...selectedTags,
        tag
      ]
      : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({selectedTags: nextSelectedTags});
  }

  render() {
    const {selectedTags} = this.state;
    return (
      <div className={css.FloatLeft}>
        {tagsFromServer.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}>
            {tag}
          </CheckableTag>
        ))}
      </div>
    );
  }
}

export default MyTag;