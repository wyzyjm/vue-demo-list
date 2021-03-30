const mutations = {
    // 加
    sum(state) {
        state.count += 5
    },
    // 设置年龄
    setAge(state, val) {
        state.age = val
    },
    // 设置天气
    setWeather(state,val){
        state.weather = val
    }
}

export default mutations;