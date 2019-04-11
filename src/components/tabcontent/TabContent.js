import React from 'react';
import {Tabs} from 'antd';
import {addPage, changePage, deletePage} from "../../actions";
import {connect} from "react-redux";
import Content from '../content/Content';
import {Route} from "react-router";

const TabPane = Tabs.TabPane;

class TabContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            panes: this.props.pageList,
            activeKey: this.props.activeKey
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        //console.log(`AK will change from ${this.props.activeKey} to ${nextProps.activeKey}`)
        this.setState({
            panes: nextProps.pageList,
            activeKey: nextProps.activeKey
        })
    }

    onChange = (activeKey) => {
        this.props.changePage(activeKey);
        this.props.history.push(`/${activeKey}`,this.state)
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = (key) => {
    };

    remove = (targetKey) => {
        console.log(this.props.activeKey)
        this.props.deletePage(targetKey);
        console.log(this.props.activeKey)
        this.props.history.push(`/${this.state.activeKey}`,this.state)

    };

    render() {
        return (
            <div style={{padding: '0px 0px 0px 16px', background: '#fff', height: "100%"}}>
                <Tabs
                    hideAdd
                    onChange={this.onChange.bind(this)}
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit.bind(this)}>
                    {this.state.panes.map(pane => {
                            return (
                                <TabPane tab={pane.title} key={pane.key}>
                                    <Route path="/:key" component={Content} />
                                </TabPane>
                            )
                        }
                    )}
                </Tabs>
            </div>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(TabContent);
