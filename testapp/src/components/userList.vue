<template>
    <div class="userlist">
        <h2 class="title">用户列表</h2>
        <ul class="list">
            <li v-for="item,index in userlist" :key="index" class="li" @click="chooseUser(index)">
                <img :src="item.avatar" :alt="item.name" class="img">
                <h3>{{item.name}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        userlist:{
            type:Array,
            requied:true
        }
    },
    methods:{
        chooseUser(index){
            this.$emit('chooseUser',index);
        }
    }
};
</script>

<style scoped>
.userlist{
    flex-grow: 0;
    flex-grow: 0;
    width: 300px;
    border-left: 1px solid #000;
    overflow: hidden;
}
.title{
    padding-left: 10px;
    padding-left: 10px;
}
.list{
    padding: 10px;
    padding: 10px;
    background-color: #ccc;
}
.li {
    width: 100%;
    display: flex;
    cursor: pointer;
}
.img{
    width: 50px ;
    height: 50px;
}
</style>
