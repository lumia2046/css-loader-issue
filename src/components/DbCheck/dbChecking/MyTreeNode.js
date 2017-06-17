import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

class MyTreeNode extends Component {

  constructor() {
    super();
  }
  
  state = {
    expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
  }
  onExpand = (expandedKeys) => {
    console.log('onExpand', arguments);
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }
  onCheck = (checkedKeys) => {
    this.setState({
      checkedKeys,
      selectedKeys: ['0-3', '0-4'],
    });
  }
  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  }
  render() {

    const treeData = this.props.treeData
    console.log('------------treeData----------------')
    console.log(treeData)

    const x = 3;
    const y = 2;
    const z = 1;
    const gData = treeData.data;

    console.log('------------gData----------------')
    console.log(gData)

    const generateData = (_level, _preKey, _tns) => {
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
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.onCheck}
        checkedKeys={this.state.checkedKeys}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {loop(gData)}
      </Tree>
    );
  }
}

export default MyTreeNode