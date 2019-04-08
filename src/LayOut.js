import React from 'react';
import {Layout} from "antd";
import LeftMenu from "./components/leftmenu/LeftMenu";
import TabContent from "./components/tabcontent/TabContent";

const {Header, Footer, Sider, Content} = Layout;

class LayOut extends React.Component {
    onRef=(ref)=>{
        this.child=ref
    };

    render() {
        return (
            <div>
                <Layout>

                    <Header style={{background: '#fff'}}>
                        <h1 style={{textAlign: "center"}}>Management System</h1>
                    </Header>

                    <Layout style={{height:'auto'}}>
                        <Sider style={{
                            overflow: 'auto',
                            height: 'inherit',
                            background: "#fff",
                            margin: '0px 0px 0px 50px'
                        }}>
                            <LeftMenu handle={(key)=> {
                                this.child.add(key)
                            }}/>
                        </Sider>

                        <Content style={{margin: '0px 50px 0px 0px', height:'inherit'}}>
                            <TabContent onRef={this.onRef}/>
                        </Content>
                    </Layout>

                    <Footer style={{textAlign: 'center', height: "auto"}}>
                            Management System ©2019 Created by David Xie
                    </Footer>

                </Layout>
            </div>
        );
    }
}

export default LayOut;