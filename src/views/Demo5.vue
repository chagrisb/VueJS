<template>
  <div>
    <h1>Binding</h1>
    <img v-bind:src="imageUrl" v-bind:height="height" v-bind:width="width">
    <br />
    <a :href="link" target="_blank">WEBLINK</a>
    <div :class="[errorClass, important]">ACLASSERROR</div>
    <div :style="{color, fontSize:fontSize}">BindingStyle</div>
    <div :style="isActive ? styleObj :''">BindingStyle OBJECT</div>
    <button @click="isActive = !isActive">O/I</button>
  </div>
</template>

<script>
export default {
    name:'Demo-5',
    data() {
        return {
            imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png",
            height: 100,
            width: 150,
            link: "https://www.nti.co.th",
            errorClass: 'error',
            important: 'important',
            color: 'green',
            fontSize: "30px",
            styleObj: {
                backgroundColor:'yellow',
                color:'red'
            },
            isActive: true
        }
    },
}
</script>

<style>
    .error{
        background: red;
        color: white;
    }
    .important{
        font-size: 30px;
        font-weight: 900;
    }
</style>