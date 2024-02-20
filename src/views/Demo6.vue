<template>
  <div>
    <h1>FORM</h1>
    <form v-on:submit.prevent="Submit">
        <div>
            <label for="first_name">Firstname:</label>
            <input type="text" name="first_name" v-model.trim="applicant.first_name">
        </div>
        <div>
            <label for="last_name">Lastname:</label>
            <input type="text" name="last_name" v-model="applicant.last_name">
        </div>
        <div>
            <label for="sex">Male:</label>
            <input type="radio" name="sex" value="Male" v-model="applicant.sex">
            <label for="sex">Female:</label>
            <input type="radio" name="sex" value="Female" v-model="applicant.sex">
        </div>
        <div>
            <label for="sex">Age:</label>
            <input type="number" name="age" v-model.number="applicant.age">
        </div>
        <div>
            <select name="courses" v-model="applicant.course">
                <option value="react">react</option>
                <option value="angular">angular</option>
                <option value="vuejs">vuejs</option>
            </select>
        </div>
        <button type="Submit">SUBMIT</button>
        <button type="Clear" @click.exact="Clear" @click.alt="UseDefault">CLEAR</button>
    </form>
    <div style="margin-top: 16px; color: red;">#SPY {{JSON.stringify(applicant)}}</div>
  </div>
</template>

<script>
export default {
    name:'Demo-6',
    data() {
        return {
            applicant:{
                first_name:'',
                last_name:'',
                sex:'',
                course:'',
                age:0
            }
        }
    },
    methods: {
        Submit(){
            alert(JSON.stringify(this.applicant))
        },
        Clear(){
            this.applicant = {
            first_name:'',
                last_name:'',
                sex:'',
                course:'',
                age:0
        }
        },
        UseDefault(){
            this.applicant = {
                first_name:'Bruce',
                last_name:'Lee',
                sex:'Male',
                course:'angular',
                age:1000
        }
        }
    },
}
</script>

<style>

</style>