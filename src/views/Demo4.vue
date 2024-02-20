<template>
  <div>
    <h1>Compute VS Method</h1>
    <h2>{{firstname}}</h2>
    <h2>{{lastname}}</h2>
    <h2>{{fullname}}</h2>
    <h3>Random by Compute {{getrandomno}}</h3>
    <h3>Random by Compute {{getrandomno}}</h3>
    <h3>Random by Compute {{getrandomno}}</h3>
    <br />
    <h3>Random by Method {{getrandomno1()}}</h3>
    <h3>Random by Method {{getrandomno1()}}</h3>
  </div>
</template>

<script>
export default {
    name:'Demo-4',
    methods: {
        getrandomno1: function(){
            return Math.random();
        }
    },
    data() {
        return {
            firstname:'Chagris',
            lastname:'Kondai'
        }
    },
    computed: {
        fulname(){
            return this.firstname + " " + this.lastname
        },
        getrandomno(){
            return Math.random();
        }
    }
}
</script>

<style>

</style>