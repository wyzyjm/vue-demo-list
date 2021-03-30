module.exports = {
    // 开发配置
    devServer: {
        proxy:{
            '/api':{
                target:"http://localhost:3000/",
                pathRewrite:{
                    '^/api':""
                }
            }
        }
    }
}