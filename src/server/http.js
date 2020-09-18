//二次封装axios
import http from 'axios';
import qs from 'qs';

// let pro_url="http://localhost:3001";
let dev_url="http://api.cms.liulongbin.top/api"


http.defaults.baseURL = dev_url;
http.default.timeout = 6666;

http.interceptors.request.use(config =>{
    if(config.method === 'get' || config.method === 'put'){
        // config.headers = {
        //     'Content-type':'application/json;charset=utf-8'
        // }
        config.data = qs.stringify(config.data)
    } else if(config.method === 'post' || config.method === 'delete'){
        config.headers = {
            'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
        }
        config.data = qs.stringify(config.data)
    }
    return config
},error =>{
    const err = new Error(error);
    throw err;
});
//响应拦截
http.interceptors.response.use(
    response =>{
        if(response.data.status === 200){
            console.log('响应成功') 
        }
        return response.data;
    },
    error =>{
        const err = new Error(error);
        // throw 专门暴露错误的一个语法
        throw err;
    }
);

export default http;