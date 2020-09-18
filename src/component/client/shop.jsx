import React,{Component} from 'react'
import { listApi } from '../../server'
import { Link } from 'react-router-dom'
import '../../css/shop.css'
class Shop extends Component{
    constructor(props){
        super(props)
        this.state={
            goods:[]
        }
    }
    getGoods(){
        listApi.getShopList(1).then(res=>{
            this.setState({
                goods:res.message
            })
            console.log(this.state.goods)
        })
    }
    componentDidMount(){
       this.getGoods() 
    }
    
    render(){
        return(
            <div className="shop">
                {
                    this.state.goods.map(item=>{
                        return(
                            <div className="phones" key={item.id} >
                                <Link className="link" to={`shop_detail/${item.id}`}>
                                    <img src={item.img_url} className="pics" alt="#"/>
                                    <h3>{item.title}</h3>
                                    <div className='describe'>
                                        <p className="p1">
                                            <span className='price'>${item.sell_price}</span>
                                            <span className='oldPrice'>${item.market_price}</span>
                                        </p>
                                        <p className="p2">
                                             <span>热卖中</span>
                                            <span>剩{item.stock_quantity}件</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>    
                        )
                    })
                }
            </div>
        )
    }
}
export default Shop

// box-shodow:1px 1px 2px #888