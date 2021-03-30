const express = require('express')

const app = express()

// 后台跨域设置
// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', '*')
//     res.append('Access-Control-Allow-headers', '*')
//     next()
// })

// 请求接口
app.get('/banner', (req, res) => {
    res.json({
        msg: "这是banner数据"
    })
})

app.listen(3000, () => {
    console.log('http://localhost:3000');
})