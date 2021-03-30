const actions = {
    // 获取天气
    getWeather(state,city) {
        let url = `https://v0.yiketianqi.com/api?version=v61&appid=82797537&appsecret=wIG3HMUL&city=${city}`;
        fetch(url).then(res=>res.json()).then(res=>{
            // console.log(res);
            // 通过mutations 设置天气
            state.commit('setWeather',res)
        })
    }
}

export default actions;