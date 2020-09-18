import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
// import { Carousel, WingBlank,Grid } from 'antd-mobile';

import './home.css'
import 'antd-mobile/dist/antd-mobile.css'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            icons:[
                {
                    icon:'a',
                    text:'首页',
                    path:'/homepage'
                },
                {
                    icon:'b',
                    text:'会员',
                    path:'/member'
                },
                {
                    icon:'c',
                    text:'购物车',
                    path:'/cart'
                },
                {
                    icon:'d',
                    text:'搜索',
                    path:'/search'
                },
            ]
        }
    }
    render(){
        return(
            <div className="home">
                <div className="nav_bar">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => window.history.back()}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                        >商城项目
                    </NavBar>
                </div>
                <div className='content'>
                    {this.props.children}
                </div>
                <div className="tab_bar">
                    {
                        this.state.icons.map(item=>(
                            <Link to={item.path} key={item.text}>
                            <div className='tab'>
                                <div className='icon'>{item.icon}</div>
                                <div className='text'>{item.text}</div>
                            </div></Link>
                        ))
                    }
                </div>
            </div>
        )
    }

}
export default Home