<template>
  <div id='footer' class="footer">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
    name:'footer-01',
    mounted() {
        setInterval(()=>{
            this.$emit('onClock', Date())
        }, 100)
            },
    props:[
        'title',
    ]
}
</script>

<style scoped>
.footer{
    font-size: 12px;
    color: gray;
    padding-top: 200px;
  }
</style>