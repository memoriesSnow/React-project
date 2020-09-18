import http from './http';
// 专门写details组件的请求接口
const aaa ='http://152.136.97.184:3000'

export const listApi = {
    getloop:() => http.get(`${aaa}/getlunbo`),
    getnewsList:() => http.get('/getnewslist'),
    getnew:newid => http.get(`./getnew/${newid}`),
    comment:(a,content) => http.post(`/postcomment/${a}`,{content}),
    getComment:(id,page) =>http.get(`/getcomments/${id}?pageindex=${page}`),

    getImageNav:() =>http.get('/getimgcategory'),

    getImageData:imgid =>http.get(`/getimages/${imgid}`),
    getList:()=>http.get("http://localhost:3001/allData"),

    getImages:imgid => http.get(`/getthumimages/${imgid}`),
    getImageInfo:imgid => http.get(`/getimageInfo/${imgid}`),

    getShopList:page => http.get(`/getgoods?pageindex=${page}`),
    getShopInfo:id => http.get(`/api/goods/getinfo/${id}`),
    getShopDetail:id => http.get(`/goods/getdesc/${id}`)
}