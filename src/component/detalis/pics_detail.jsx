import React,{Component} from 'react'
import { listApi } from '../../server'
import '../../css/pics_detail.css'
class Pics_Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            images:[],
            info:[],
            comment:[],
            params:this.props.match.params.id
        }
    }
    //获取图片详情
    getDetails(){
        listApi.getImages(this.state.params).then(res=>{
            this.setState({
                images:res.message
            })
        })   
    }
    //获取图片信息
    getImagesInfo(){
        listApi.getImageInfo(this.state.params).then(res=>{
            console.log(res)
            this.setState({
                info:res.message
            })
        })
        console.log(this.state.info)
    }
    //获取评论
    getComments(){
        listApi.getComment(this.state.params,1).then(res=>{
            this.setState({
                comment:res.message
            })
        })
    }
    componentDidMount(){
        this.getDetails()
        this.getComments()
        this.getImagesInfo()
    }
    render(){
        return(
            <div className="pics_detail">
                <div className="title">
                    {
                        this.state.info.map(item=>{
                            return(
                                <div key={item.id}>
                                    <div className="title">{item.title}</div>
                                    <div className="add_time">
                                        <div>发表时间：{item.add_time}</div>
                                        <div>{item.click}</div>
                                    </div>
                                    <hr/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="gallery">
                    {
                        this.state.images.map(item=>{
                            return(
                                <div className="img_container" key={item.id}><a className="img_a" href="www.baidu.com">
                                    <img src={item.src} className="images" alt=""/>
                                </a></div>
                                )
                        })
                    }
                </div>
                <div>
                    {
                        this.state.info.map(item=>{
                            return(
                                <div key={item.id}>{item.content}</div>
                            )
                        })
                    }
                </div> 
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
export default Pics_Detail