import React,{Component} from 'react'
import { listApi } from '../../server'
import { Link } from 'react-router-dom'
import '../../css/pics.css'
class Pics extends Component{
    constructor(props){
        super(props)
        this.state={
            nav:[/*{
                title:"全部",
                id:0
            }*/],
            id:0,
            info:[]
        }
    }
    getNav(){
        listApi.getImageNav().then(res=>{
            this.setState({
                nav:res.message
            })
            this.state.nav.unshift({
                title:'全部',
                id:0
            })
            // this.state.nav.concat(res.message)
            console.log(this.state.nav)
        })
    }
    getImages(id){
        listApi.getImageData(id).then(res=>{
            this.setState({
                info:res.message
            })
            console.log(this.state.info)
        })
    }
    componentDidMount(){
        this.getNav();
        this.getImages(0);
    }
    
    handleClick(id){
        this.setState({
            id:id
        })
    }
    render(){
        return(
            <div className="pics">
                <div className="nav">
                    {
                        this.state.nav.map(item=>{
                            return(
                                <span key={item.id}>{item.title}</span>
                            )
                        })
                    }
                </div>
                <div className="container">
                    <ul>
                        {
                            this.state.info.map(item=>{
                                return(
                                    <Link to={`pics_detail/${item.id}`}  key={item.id}>   
                                        <li className="imgss"><img src={item.img_url} alt="#"/></li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Pics