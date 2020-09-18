import React,{Component} from 'react'
import { listApi } from '../../server'
import '../../css/pics_detail.css'
class Shop_Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            shop:[],
            params:this.props.match.params.id
        }
    }
    //商品详情
    ShopDetail(){
        listApi.getShopDetail(this.state.params).then(res=>{
            this.setState({
                shop:res.message
            })
            console.log(this.state.shop)
        })
    }
    componentDidMount(){
       this.ShopDetail()
    }
    render(){
        return(
            <div className="shop_detail">
                shop
            </div>
        )
    }
}
export default Shop_Detail