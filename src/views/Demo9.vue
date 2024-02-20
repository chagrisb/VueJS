<template>
  <div id="Loop">
    <ul>
        <li v-for="(item, index) in ['Angular','Vue','React']" :key="index">{{item}}</li>
    </ul>
    <hr>
    <ul>
        <li v-for="({title, price}, index) in mCourses" :key="index">{{title}} ราคา {{price}}</li>
    </ul>
    <hr>
    <input type="text" placeholder="Courses Title" v-model="title">
    <br>
    <input type="text" placeholder="Courses Price" v-model="price">
    <br>
    <button @click="addCourse()">Submit</button>

    <ul>
        <li v-for="(course, index) in course" :key="index">{{course.title}} ราคา {{course.price}} <button @click="removeCourse(index)">X</button></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Demo-Loop',
    data() {
        return {
            course: [],
            title: '',
            price: 0,
            mCourses:[
                {title: 'iOS', price: 10},
                {title: 'Android', price: 20},
                {title: 'Windows', price: 30}
            ]
        }
    },
    methods: {
        removeCourse(index){
            this.course.splice(index,1)
        },
        addCourse(){
            this.course.push({ title: this.title, price: this.price});
            this.title = '';
            this.price = '';
        }
    },
}
</script>

<style>

</style>