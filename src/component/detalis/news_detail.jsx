import React,{Component} from 'react'
import { listApi } from '../../server'
import '../../css/news_detail.css'
class News_Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            new:[],
            params:this.props.match.params.id,
            comment:[]
        }
    }
    //获取新闻详情 
    getDetails(){
        listApi.getnew(this.state.params).then(res=>{
            console.log(res)
            this.setState({
                new:res.message
            })
        })
        
    }
    
    //评论
    // Comment(content){
    //     listApi.comment(this.state.params,content).then(res=>{
    //         console.log(content)
    //     })
    // }

    //获取评论信息
    getComments(){
        listApi.getComment(this.state.params,1).then(res=>{
            console.log(res)
            this.setState({
                comment:res.message
            })
            console.log(this.state.comment)
        })
    }
    componentDidMount(){
        this.getDetails()
        this.getComments()
    }
    render(){
        return(
            <div className="news_detail">
                {
                    this.state.new.map(item=>{
                        return(
                            <div key={item.id}>
                                <div className="title">{item.title}</div>
                                <div className="add_time">
                                    <div>发表时间：{item.add_time}</div>
                                    <div>{item.click}</div>
                                </div>
                                <hr/>
                                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                            </div>
                        )
                    })
                }
                <div className="content">
                    <h3 className="h3">发表评论</h3><hr className="hr"/>
                    <textarea className="textarea" placeholder="请输入要bb的内容(最多120字)" maxLength="120"></textarea>
                    <button className="button">发表评论</button>
                    {
                        this.state.comment.map((item,index)=>{
                            return(
                                <div key={item.id} className="arguement">
                                    <p className="p11">第{index+1}楼 用户：
                                        {item.user_name} 发表时间 
                                        {item.add_time.slice(0,10)} &nbsp;
                                        {item.add_time.slice(11,19)} 
                                    </p>
                                    <p className="p22">{item.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default News_Detail