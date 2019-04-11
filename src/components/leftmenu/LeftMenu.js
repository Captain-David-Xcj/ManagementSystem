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
        this.props.addPage({
            title:"Welcome",
            key: `0`,
            component: `Welcome`,
            content: '欢迎欢迎，热烈欢迎123！'
        });
        this.props.history.push("/0",this.state)
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
        if ("undefined" != typeof (childArray) && childArray.length > 0) {
            cHtml = childArray.map((item, i) => {
                return this.formSubmenusChild(item);
            });
            return (
                <SubMenu key={obj.key} title={
                    <span>
                        <Icon type={obj.icon}/>
                        <span>{obj.tittle}</span>
                    </span>
                }>
                    {cHtml}
                </SubMenu>
            )
        } else {
            return (
                <Mitem routeurl={`/${obj.key}`} key={obj.key} component={obj.component} tittle={obj.tittle}>
                    <Icon type={obj.icon}/>
                    {obj.tittle}
                </Mitem>
            )
        }
    }

    handleClick(e) {
        console.log(e);
        const panes = this.state.pageList;
        for (let i = 0; i < panes.length; i++) {
            if (panes[i].key === e.key) {
                console.log("这个标签页已经打开了");
                this.props.changePage(e.key);
                this.props.history.push(`/${e.key}`,this.state)
                return;
            }
        }
        this.props.addPage({
            title:`${e.item.props.component}`,
            key: `${e.key}`,
            component: `${e.item.props.component}`,
            content: '欢迎欢迎，热烈欢迎123！'
        });
        this.props.changePage(e.key);
        this.props.history.push(`/${e.key}`,this.state)

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
                        <Mitem routeurl={`/${menuItem.key}`} key={menuItem.key} tittle={menuItem.tittle}>
                            <Icon type={menuItem.icon}/>
                            {menuItem.tittle}
                        </Mitem>
                    )
                }
            }
        );
        return (
            <Menu theme="dark"
                  onClick={this.handleClick.bind(this)}
                  style={{width: 200}}
                  defaultOpenKeys={['sub1']}
                  selectedKeys={[backEndMenuUrl]}
                  mode="inline">
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
            "tittle": "Appstore",
            "routeUrl": "",
            "child": [{
                "key": "3",
                "icon": "search",
                "tittle": "Search",
                "routeUrl": "",
                "component":"Search"
            }]
        },
        {
            "key": "1",
            "icon": "mail",
            "tittle": "Mail",
            "routeUrl": "",
            "child": [{
                "key": "4",
                "icon": "notification",
                "tittle": "Notification",
                "routeUrl": "",
                "component":"Picture"
            }]
        },
        {
            "key": "2",
            "icon": "setting",
            "tittle": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "5",
                "icon": "star",
                "tittle": "Star",
                "routeUrl": "",
                "component":"Picture"
            }]
        },
        {
            "key": "6",
            "icon": "setting",
            "tittle": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "7",
                "icon": "star",
                "tittle": "Star",
                "routeUrl": "",
                "component":"Picture"
            }]
        },
        {
            "key": "8",
            "icon": "setting",
            "tittle": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "9",
                "icon": "star",
                "tittle": "Star",
                "routeUrl": "",
                "component":"Picture"
            }]
        },
        {
            "key": "10",
            "icon": "setting",
            "tittle": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "11",
                "icon": "star",
                "tittle": "Star",
                "routeUrl": "",
                "component":"Picture"
            }]
        },
        {
            "key": "12",
            "icon": "setting",
            "tittle": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "13",
                "icon": "star",
                "tittle": "Star",
                "routeUrl": "",
                "component":"Picture"
            }]
        },
        {
            "key": "14",
            "icon": "setting",
            "tittle": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "15",
                "icon": "star",
                "tittle": "Star",
                "routeUrl": "",
                "component":"Picture"
            }]
        }
    ]
};

const mapStateToProps = (state) => {
    return {
        pageList: state.page.pageList,
        activeKey: state.page.activeKey
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