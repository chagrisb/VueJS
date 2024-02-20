<template>
  <div id='slot'>
    <h1>SLOT</h1>
    <Clock />
    <Clock>
        <span style="color:red;">เวลาปัจจุบัน</span>
    </Clock>
    <Clock>
        <span style="color:blue;">เวลาปัจจุบัน</span>
    </Clock>
    <Clock>
        <template v-slot:header>
            <h1>Header</h1>
        </template>
        <template v-slot:footer>
            <h1>Footer</h1>
        </template>

        <span style="color:green;">เวลาปัจจุบัน</span>
    </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helper/Clock.vue"
export default {
    name:'slot-demo',
    components:{
        Clock
    }
}
</script>

<style>

</style>