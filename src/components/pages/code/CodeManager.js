/**
 * Created by binwang on 17/8/10.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Menu, Button} from 'antd';
import CodeEditor from './CodeEditor';

const ButtonGroup = Button.Group;

class CodeManager extends Component {

    static defaultProps = {};

    static propTypes = {};

    //构造函数，在创建组件的时候调用一次。
    constructor(props, context) {
        super(props);
        const files = [
            {
                name:"路由",
                path:"/routes.js"
            },{
                name:"菜单",
                path:"/menus.js"
            }, {
                name:"正则表达式",
                path:"/util/RegExpression.js"
            }, {
                name:"国际化(中文)",
                path:"/locales/zh-CN.js"
            }, {
                name:"国际化(英文)",
                path:"/locales/en-US.js"
            },
        ];
        this.state = {
            files: files,
            selectedFile: files[0]
        }
    }

    //在组件挂载之前调用一次。如果在这个函数里面调用setState，本次的render函数可以看到更新后的state，并且只渲染一次。
    componentWillMount() {

    }

    //在组件挂载之后调用一次。这个时候，子主键也都挂载好了，可以在这里使用refs。
    componentDidMount() {

    }

    //props是父组件传递给子组件的。父组件发生render的时候子组件就会调用componentWillReceiveProps（不管props有没有更新，也不管父子组件之间有没有数据交换）。
    componentWillReceiveProps(nextProps) {

    }

    //组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要重新渲染组件。默认返回true，需要重新render。在比较复杂的应用里，有一些数据的改变并不影响界面展示，可以在这里做判断，优化渲染效率。
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    //shouldComponentUpdate返回true或者调用forceUpdate之后，componentWillUpdate会被调用。
    componentWillUpdate(nextProps, nextState) {

    }

    //除了首次render之后调用componentDidMount，其它render结束之后都是调用componentDidUpdate。
    componentDidUpdate() {

    }

    setEditor(selectedFile){
        this.setState({selectedFile});
    }

    //主体渲染入口，不要在render里面修改state。
    render() {
        const {selectedFile,files} = this.state;
        return (<div><ButtonGroup>
            {
                _.map(files, f => <Button key={f.name} type={f.name === selectedFile.name ? 'primary' : 'default'}
                                          onClick={this.setEditor.bind(this, f)}>{f.name}</Button>)
            }
        </ButtonGroup>
            <CodeEditor path={selectedFile.path}></CodeEditor>
        </div>);
    }

    //组件被卸载的时候调用。一般在componentDidMount里面注册的事件需要在这里删除。
    componentWillUnmount() {

    }
}
//redux store 属性 对接组件的 props 属性。
function mapStoreToProps(store) {
    return {}
}

export default connect(mapStoreToProps)(CodeManager);