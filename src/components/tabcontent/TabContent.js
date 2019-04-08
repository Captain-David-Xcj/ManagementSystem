import React from 'react';
import {Tabs} from 'antd';
import {addPage, changePage, deletePage} from "../../actions";
import {connect} from "react-redux";

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
        console.log("refreshing")
        console.log(this.state)
        this.setState({
            panes: nextProps.pageList,
            activeKey: nextProps.activeKey
        })
        console.log(this.state)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state)
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    onChange = (activeKey) => {
        this.props.changePage(activeKey);
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = (key) => {
        this.props.changePage(key);
    };

    remove = (targetKey) => {
        this.props.deletePage(targetKey);
    };

    render() {
        return (
            <div style={{padding: '0px 0px 0px 16px', background: '#fff', height: "100%"}}>
                <Tabs
                    hideAdd
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}>
                    {this.state.panes.map(pane =>
                        <TabPane tab={pane.title} key={pane.key}>
                            {pane.content}
                        </TabPane>)}
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
