<template>
<div id="app">
<Header></Header>
<Content />
<Footer @onClock='onClock' title="Copyright 2024 by GRIS"></Footer>
<div class='clock'>{{time}}</div>
</div>


</template>

<script>
import Header from "@/components/layouts/header.vue"
import Footer from "@/components/layouts/footer.vue"
import Content from "@/components/layouts/content.vue"
import moment from "moment"

export default {
  name:"app",
  components:{
    Header,Footer,Content
  },
  methods: {
    onClock(value){
      this.time = moment(value).format('MM/DD/YYYY')
  }
  },
  data() {
    return {
      time:''
    }
  },
}

</script>

<style scoped>
  .clock{
    font-size: 12px;
    color: blue;
  }
</style>