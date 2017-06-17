import { Tree } from 'antd';
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import css from '../CSS/BusinessDb.css'


import ZTBCX_ICON from '../Image/ZTBCX_ICON.png'

const TreeNode = Tree.TreeNode;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  // debugger;
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

class UserTreeNode extends React.Component {
  state = {
    expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
  }

  onExpand = (expandedKeys) => {
    console.log('onExpand', arguments);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', info);
    this.setState({
      checkedKeys,
      selectedKeys: ['0-3', '0-4'],
    });
  }

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.props.handleTableChange(selectedKeys, selectedKeys);

    this.setState({ selectedKeys });
  }

  render() {
    const loop = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode key={item.key} title={item.key} disableCheckbox={item.key === '0-0-0'}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={item.key} />;
    });
    return (
      <Tree
        checkable
        showLine
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.onCheck}
        checkedKeys={this.state.checkedKeys}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {/*   
        <TreeNode title="parent 1" key="123">
          <TreeNode title="parent 1-0" key="123123" >
            <TreeNode title="leaf" key="32123" />
            <TreeNode title="leaf" key="3213123" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="123123123">
            <TreeNode title={<span style={{ color: '#08c', content: "\E662" }}>sssssssss</span>} key="ssdfsdfsf" />
          </TreeNode>
        </TreeNode>
        */}
        {loop(gData)}
      </Tree>
    );
  }
}

export default UserTreeNode;