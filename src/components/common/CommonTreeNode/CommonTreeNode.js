import React from 'react';
import prefix from '../../../utils/routePrefix'
import { getCommonTableDataByPage } from '../../../actions'
import styles from './styles.css'
import getSize from '../../../utils/getSize'
import { Tree } from 'antd'

const TreeNode = Tree.TreeNode

export default class CommonTreeNode extends React.Component {
  constructor() {
    super();
    this.state = {
      expandedKeys: ["k", "a"],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      treeData:{}
    }
  }



  componentWillMount() {
    const {dispatch,tree} = this.props
    if(tree.autoExpandParent){
      this.setState({autoExpandParent:tree.autoExpandParent})
    }
    if(tree.expandedKeys){
      this.setState({expandedKeys:tree.expandedKeys})
    }
    if(tree.selectedKeys){
      this.setState({selectedKeys:tree.selectedKeys})
    }
    if(tree.checkedKeys){
      this.setState({checkedKeys:tree.checkedKeys})
    }
    if(tree.data){
      this.setState({treeData:tree.data})
    }else if(tree.url){
      fetch(tree.url)
      .then(response => response.json())
      .then(json => this.setState({treeData:json}))
    }



  }
  componentWillReceiveProps(newProps) {
    // let oldData = this.props.commonTable;
    // let newData = newProps.commonTable;
    // if(oldData.data != newData.data){
    //   this.setState({...this.state,...newData});
    // }

  }
  onExpand = (expandedKeys) => {
    console.log('onExpand', arguments);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
    if(this.props.tree.onExpand){
      this.props.tree.onExpand(expandedKeys)
    }
  }
  onCheck = (checkedKeys) => {
    this.setState({
      checkedKeys
    });
    if(this.props.tree.onCheck){
      this.props.tree.onCheck(checkedKeys)
    }
  }
  onSelect = (selectedKeys, info) => {
    this.setState({ selectedKeys });
    if(this.props.tree.onSelect){
      this.props.tree.onSelect(info.node.props)
    }
  }

  render() {

    const loop = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode key={item.key} title={item.title} value={item.value}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={item.title} value={item.value}/>;
    });
    return (
      <Tree
        showLine={this.props.tree.showLine}
        checkable={this.props.tree.checkable}
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.onCheck}
        checkedKeys={this.state.checkedKeys}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {loop(this.state.treeData)}
      </Tree>
    );
  }
}