import PropTypes from 'prop-types';
import React from 'react';
import {Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {addPage,deletePage,changePage} from "../../actions";

const Mitem = Menu.Item;
const SubMenu = Menu.SubMenu;

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: props.menuItems,
            backEndMenuUrl: props.backEndMenuUrl,
            pageList:[],
            activeKey:""
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            pageList:nextProps.pageList,
            activeKey:nextProps.activeKey
        })
    }

    formSubmenusChild(obj) {
        let cHtml = <div></div>;
        let childArray = obj.child;
        //console.log(obj);
        if ("undefined" != typeof (childArray) && childArray.length > 0) {
            cHtml = childArray.map((item, i) => {
                return this.formSubmenusChild(item);
            });
            return (
                <SubMenu key={obj.key} title={
                    <span>
                        <Icon type={obj.icon}/>
                        <span>{obj.name}</span>
                    </span>
                }>
                    {cHtml}
                </SubMenu>
            )
        } else {
            return (
                <Mitem routeurl={obj.routeUrl} key={obj.key}><Icon type={obj.icon}/>
                    {obj.name}
                </Mitem>
            )
        }
    }

    handleClick(e) {
        const panes = this.state.pageList;
        for (let i = 0; i < panes.length; i++) {
            if (panes[i].key === e.key) {
                console.log("这个标签页已经打开了");
                this.props.changePage(e.key);
                return;
            }
        }
        this.props.addPage({
            title:`${e.key}`,
            key: `${e.key}`,
            component: "Welcome123",
            content: '欢迎欢迎，热烈欢迎123！'
        });
        this.props.changePage(e.key);
        //console.log(this.props.page);
        //this.props.handle(e.key)


        //const {actions}=this.props;
        //let menuInfo={
        //    打印antd Menu组件的onClick返回值（e）可以看出通过e.item.props来获取我们item组件的自定义属性
        //    routeUrl:e.item.props.routeUrl,
        //    url: e.key,
        //    target:'mainFrame'
        //}
        //根据route路由地址和iframe地址的值判断使用哪个作为菜单页面展示方式
        //actions.onLoadMain(menuInfo);
    }

    render() {
        const {menuItems, backEndMenuUrl} = this.state;
        let html = menuItems.map(
            (menuItem) => {
                if ("undefined" != typeof (menuItem.child) && menuItem.child.length > 0) {
                    return this.formSubmenusChild(menuItem);
                } else {
                    return (
                        <Mitem routeurl={menuItem.routeUrl} key={menuItem.key}>
                            <Icon type={menuItem.icon}/>
                            {menuItem.name}
                        </Mitem>
                    )
                }
            }
        );
        return (
            <Menu theme="light"
                  onClick={this.handleClick.bind(this)}
                  style={{width: 200}}
                  defaultOpenKeys={['sub1']}
                  selectedKeys={[backEndMenuUrl]}
                  mode="inline"
            >
                {html}
            </Menu>
        )
    }

};

LeftMenu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.object)
};

LeftMenu.defaultProps = {
    menuItems: [
        {
            "key": "0",
            "icon": "appstore",
            "name": "Appstore",
            "routeUrl": "",
            "child": [{
                "key": "3",
                "icon": "search",
                "name": "Search",
                "routeUrl": ""
            }]
        },
        {
            "key": "1",
            "icon": "mail",
            "name": "Mail",
            "routeUrl": "",
            "child": [{
                "key": "4",
                "icon": "notification",
                "name": "Notification",
                "routeUrl": ""
            }]
        },
        {
            "key": "2",
            "icon": "setting",
            "name": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "5",
                "icon": "star",
                "name": "Star",
                "routeUrl": ""
            }]
        },
        {
            "key": "6",
            "icon": "setting",
            "name": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "7",
                "icon": "star",
                "name": "Star",
                "routeUrl": ""
            }]
        },
        {
            "key": "8",
            "icon": "setting",
            "name": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "9",
                "icon": "star",
                "name": "Star",
                "routeUrl": ""
            }]
        },
        {
            "key": "10",
            "icon": "setting",
            "name": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "11",
                "icon": "star",
                "name": "Star",
                "routeUrl": ""
            }]
        },
        {
            "key": "12",
            "icon": "setting",
            "name": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "13",
                "icon": "star",
                "name": "Star",
                "routeUrl": ""
            }]
        },
        {
            "key": "14",
            "icon": "setting",
            "name": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "15",
                "icon": "star",
                "name": "Star",
                "routeUrl": ""
            }]
        }
    ]
};

const mapStateToProps = (state) => {
    return {
        pageList: state.pageList,
        activeKey:state.activeKey
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPage: page => dispatch(addPage(page)),
        deletePage:index=>dispatch(deletePage(index)),
        changePage:key=>dispatch(changePage(key))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);