import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { listApi } from '../../server'
import '../../css/news.css'
class News extends Component{
    constructor(props){
        super(props)
        this.state={
            news:[]
        }
    }
    getNews(){
        listApi.getnewsList().then(res=>{
            this.setState({
                news:res.message
            })
            console.log(this.state.news)
        })
    }
    componentDidMount(){
        this.getNews()
    }
    render(){
        return(
            <div className="news">
                {
                    this.state.news.map(item=>
                        (
                            <Link className="items" key={item.id} to={`news_detail/${item.id}`}>
                                <div className='imgs'><img src={item.img_url} className="img" alt="#"/></div>
                                <div>
                                    <h1>{item.title}</h1>
                                    <div></div>
                                </div>
                            </Link>
                        )
                    )
                }
            </div>
        )
    }
}
export default News