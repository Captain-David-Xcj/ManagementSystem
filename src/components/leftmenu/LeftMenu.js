import PropTypes from 'prop-types';
import React from 'react';
import {Menu, Icon} from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {addPage, deletePage, changePage} from "../../actions";

const Mitem = Menu.Item;
const SubMenu = Menu.SubMenu;

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: props.menuItems,
            backEndMenuUrl: props.backEndMenuUrl,
            pageList: [],
            activeKey: ""
        }
        this.props.addPage({
            title: "Welcome",
            key: `welcome`,
            component: `Welcome`
        });
        this.props.history.push("/welcome", this.state)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            pageList: nextProps.pageList,
            activeKey: nextProps.activeKey
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
                this.props.history.push(`./${e.key}`, this.state)
                return;
            }
        }
        this.props.addPage({
            title: `${e.item.props.component}`,
            key: `${e.key}`,
            component: `${e.item.props.component}`,
            content: '欢迎欢迎，热烈欢迎123！'
        });
        this.props.changePage(e.key);
        this.props.history.push(`./${e.key}`, this.state)
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
            "key": "appstore",
            "icon": "appstore",
            "tittle": "Appstore",
            "routeUrl": "",
            "child": [{
                "key": "search",
                "icon": "search",
                "tittle": "Search",
                "routeUrl": "",
                "component": "Search"
            }]
        },
        {
            "key": "mail",
            "icon": "mail",
            "tittle": "Mail",
            "routeUrl": "",
            "child": [{
                "key": "notification",
                "icon": "notification",
                "tittle": "Notification",
                "routeUrl": "",
                "component": "Notification"
            }]
        },
        {
            "key": "setting",
            "icon": "setting",
            "tittle": "Setting",
            "routeUrl": "",
            "child": [{
                "key": "star",
                "icon": "star",
                "tittle": "Star",
                "routeUrl": "",
                "component": "Star"
            }]
        },
        {
            "key": "fund",
            "icon": "fund",
            "tittle": "Fund",
            "routeUrl": "",
            "child": [
                {
                    "key": "area-chart",
                    "icon": "area-chart",
                    "tittle": "Area-chart",
                    "routeUrl": "",
                    "component": "Area-chart"
                },
                {
                    "key": "pie-chart",
                    "icon": "pie-chart",
                    "tittle": "Pie-chart",
                    "routeUrl": "",
                    "component": "Pie-chart"
                },
                {
                    "key": "bar-chart",
                    "icon": "bar-chart",
                    "tittle": "Bar-chart",
                    "routeUrl": "",
                    "component": "Bar-chart"
                }
            ]
        },
        {
            "key": "user",
            "icon": "user",
            "tittle": "User",
            "routeUrl": "",
            "child": [
                {
                    "key": "picture",
                    "icon": "picture",
                    "tittle": "Picture",
                    "routeUrl": "",
                    "component": "Picture"
                },
                {
                    "key": "phone",
                    "icon": "phone",
                    "tittle": "Phone",
                    "routeUrl": "",
                    "component": "Phone"
                },
                {
                    "key": "message",
                    "icon": "message",
                    "tittle": "Message",
                    "routeUrl": "",
                    "component": "Message"
                }
            ]
        },
        {
            "key": "shopping",
            "icon": "shopping",
            "tittle": "Shopping",
            "routeUrl": "",
            "child": [
                {
                    "key": "dollar",
                    "icon": "dollar",
                    "tittle": "Dollar",
                    "routeUrl": "",
                    "component": "Dollar"
                },
                {
                    "key": "red-envelope",
                    "icon": "red-envelope",
                    "tittle": "Red-envelope",
                    "routeUrl": "",
                    "component": "Red-envelope"
                }
            ]
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
        deletePage: index => dispatch(deletePage(index)),
        changePage: key => dispatch(changePage(key))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);