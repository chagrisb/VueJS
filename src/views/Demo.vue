<template>

  <div id="demo-1">
  <h1>TOPIC1</h1>
  <h2>{{count}}</h2>
  <button @click="onClickAdd">Add</button>
  <h1>V-Model</h1>
  <input v-model="message" type="text" placeholder="Enter Your Massage">
  <br />{{message}}
  <button @click="message=''"> Reset </button>
</div>
</template>

<script>
export default {
name:'demo-1',
  data(){
    return {
      message: "",
      count: 0
    }
  },
  methods: {
    onClickAdd(){
      this.count=this.count+1;
    }
  },
}
</script>

<style>

</style>