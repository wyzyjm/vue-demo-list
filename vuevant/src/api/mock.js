import Mock from 'mockjs'
import position from '@/api/mock/posi.json'
import users from '@/api/mock/user.json'

// 配置请求延迟
Mock.setup({
    timeout: 500
})

// 字符串 正则都可匹配路径
Mock.mock('/api/user', users)
// 字符串 正则都可匹配路径
Mock.mock('/api/posi', position)