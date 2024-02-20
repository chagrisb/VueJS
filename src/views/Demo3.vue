<template>
  <div>
    <h1>DATA</h1>
    <button @click='count++;isLogged=true'>Count++</button>
    <span class='testdoo'>{{count}}</span>
    <div>{{message}}</div>
    <div>{{isLoggin}}</div>
    <input type="text" placeholder="Enter Message" v-model="message">
    <h2 v-if="isLogged">YAHO</h2>
    <div>{{account.username}} {{account.password}}</div>
    <div>{{courses}}</div>
    <ul>
        <li v-for="(items, index) in courses" :key="index">{{items}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'demo-3',
    mounted() {
        this.message = 'สวัสดีกาแฟ มะนาวเปรี่ยว'
    },
    data() {
        return {
            count:0,
            message:"",
            isLogged:false,
            account:{
                username:'admin',
                password:'1111'
            },
            courses:[
                "Angular",
                "VueJS",
                "ReactJS",
                "Fluter",
                "UXUI"
            ]
        }
    },
}
</script>

<style scoped>
li{
    color: aqua;
}
.testdoo{
    font-size: 30px;
    color:red;
}
</style>