<template>
  <div id="LCH">
    <h1>LifeCycleHook</h1>
    <span>{{counter}}</span>
    <br>
    <button @click="add">Change</button>
  </div>
</template>

<script>
export default {
    name:'Demo-LCH',
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        add() {
            this.counter++;
        }
    },
    beforeCreate() {
        console.log("beforeCreated");
    },
    created() {
        console.log("created");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("BeforeUpdate");
    },
    updated() {
        console.log("Updated");
    },
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    unmounted() {
        console.log("unmounted");
    },
}
</script>

<style>

</style>