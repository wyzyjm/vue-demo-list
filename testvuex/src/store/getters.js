const getters = {
    reverseMsg(state){
        return state.msg.split('').reverse().join('')
    },
    getDate( state ){
        return  state.msg + `现在是` + new Date().getFullYear()
    }
}

export default getters