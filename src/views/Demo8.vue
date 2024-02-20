<template>
  <div id='conditioner'>
    <h1>Conditioner</h1>
    <div v-if="type === 'A'">
        A
    </div>
    <div v-else-if="type === 'B'">
        B
    </div>
    <div v-else-if="type === 'C'">
        C
    </div>
    <div v-else>
        Not A/B/C
    </div>

    <div v-if ="isShow">
        Blink++
    </div>
    <div v-else>
        Blink--
    </div>
  </div>
</template>

<script>
export default {
    name:'Demo-Condition',
    mounted() {
        setInterval(()=>{
            this.isShow = !this.isShow;
        }, 100)
    },
    data() {
        return {
            type:'B',
            isShow:true
        }
    }
}
</script>

<style>

</style>