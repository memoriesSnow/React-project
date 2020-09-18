module.exports={
    "plugins": [
        ["import", { 
            libraryName: "antd-mobile", 
            style: "css" 
        }] // `style: true` 会加载 less 文件
    ]  
}
// const { override, fixBabelImports } = require('customize-cra');
// module.exports = override(
//     fixBabelImports('import', {
//         libraryName: 'antd-mobile',
//         style: 'css',
//     }),
// );
