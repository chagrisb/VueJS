<template>
  <div id='demos2'>
    <h1>Event and Method</h1>
    <button v-on:click="clickMe()">CLICK</button>
    <button v-on:click="clickMe2('Hi GRISATIAN')">CLICK2</button>
    <h3>{{getTimestamp()}}</h3>
  </div>
</template>

<script>
export default {
name:'demo-2',
mounted() {
    this.initial();
},
methods: {
    initial(){
        console.log('Initialization');
    },
    clickMe(){
        alert('GRISSS');
    },
    clickMe2(message){
        alert(message);
    },
    getTimestamp(){
        return Date();
    }
},
}
</script>

<style>

</style>