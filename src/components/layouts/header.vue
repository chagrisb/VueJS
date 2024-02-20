<template>
  <div id='header'>
    <ul>
    <li> <router-link to="/" >Home</router-link> </li>
    <li> <router-link to="/demo1" >Demo</router-link></li>
    <li> <router-link to="/demo2" >E&M</router-link></li>
    <li> <router-link to="/demo3" >Data</router-link></li>
    <li> <router-link to="/demo4" >C&M</router-link></li>
    <li> <router-link to="/demo5" >Binding</router-link></li>
    <li> <router-link to="/demo6" >Form</router-link></li>
    <li> <router-link to="/demo7" >SLOT</router-link></li>
    <li> <router-link to="/demo8" >Condition</router-link></li>
    <li> <router-link to="/demo9" >LOOP</router-link></li>
    <li> <router-link to="/demo10" >LifeCycle</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Header-01',
}
</script>

<style scoped>
ul{
    background: rgb(156, 241, 156);
    margin: 0;
    padding: 0;
  }
  li{
    display: inline;
    margin-right: 10px;
    color: white;
    font-size: 24px;
  }
  a:hover {
  color: hotpink;
}
  a:visited {
  color: white;
}
</style>