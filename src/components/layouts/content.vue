<template>
  <div id="content">
    <div class="content-wrapper">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name:'content-demo',
}
</script>

<style scoped>
.content-wrapper{
    margin: 24px;
    padding: 24px;
    border-width: 1px;
    border-color: gray;
    border-style: dashed;
  }
</style>