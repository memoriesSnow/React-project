import Home from '../Home.jsx'
import React,{ Component } from 'react'

import Main from '../component/homepage'

import News from '../component/client/news'
import Pics from '../component/client/pics'
import Shop from '../component/client/shop'

import News_Detail from '../component/detalis/news_detail.jsx'
import Pics_Detail from '../component/detalis/pics_detail.jsx'
import Shop_Detail from '../component/detalis/shop_detail.jsx'

import {
    BrowserRouter,
    // HashRouter,
    Route,
    Redirect
} from 'react-router-dom'


class XRouter extends Component{
    render(){
        return(
            <BrowserRouter>
                <Home exact>
                    <Route exact path="/homepage" component={Main} />
                    <Route path="/homepage/news" component={News}/>
                    <Route path="/homepage/news_detail/:id" component={News_Detail}/>

                    <Route path="/homepage/pics" component={Pics}/>
                    <Route path="/homepage/pics_detail/:id" component={Pics_Detail}/>

                    <Route path="/homepage/shop" component={Shop}/>
                    <Route path="/homepage/shop_detail/:id" component={Shop_Detail}/>
                    <Redirect from="/" to="/homepage" />
                </Home>
                
                    
                    
                {/* <Route path="/page2" render={()=>
                        <Child>
                            <Route path="/page2/age1" component={Age1}/>
                            <Route path="/page2/age2" component={Age2}/>
                        </Child> 
                    } /> */}
            </BrowserRouter>
        )
    }
}
export default XRouter