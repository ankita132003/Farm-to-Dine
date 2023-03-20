<template>
    <NavBar/>
    <div class="container">
        <h1> Contract Farming Contract </h1>
<div class="card">
    <div v-if="show" class="card-body">
        <form @submit.prevent="handelfarmdata ">
            <div class="form-group mb-3">
        <label>Unique name</label>
        <input   class="form-control mt-1" type="text" name="duration" placeholder="Enter duration of contract" required v-model="name">
        </div>
        <div class="form-group mb-3 mt-3">
        <label >Area of farm</label>
        <input  class="form-control mt-1" type="text" name="area" placeholder="Enter area of farm" required v-model="area">
        </div>
        <div class="form-group mb-3">
        <label>Price per unit</label>
        <input  class="form-control mt-1" type="text" name="price" placeholder="Enter price per unit" required v-model="price">
    </div>
    <input type="submit" class="btn btn-primary" value="Submit">
    </form>
    </div>
    <div class="m-3">
        <div v-if="msg" class="alert alert-success" role="alert">
        {{msg}}</div>
        <h3> clauses to be signed !</h3>
        <button  class="btn btn-primary" @click="addclause">Add Clause</button>
        <div class="form-group mb-3" v-for="(item , index) in clauses" :key= 'index'>
            <li>
         <input class="form-control mt-1" v-model="item.value" v-if="item.showInputBox" />

         <span v-if="!item.showInputBox" @click="toggleInputBox(index)">
            {{ item.value }}
        </span> 
        <div>
            <button class="btn btn-primary " v-if="item.showInputBox" @click="saveInputBox(index)">
                Save
            </button></div>
        </li>
        </div>
        <div class = 'm-3'>
                <Button class="btn btn-primary" @click.prevent="handelclausis"> Submit clauses</Button></div>
         </div>
</div>
  
</div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
export default{
    name  : "ContactFarming",
    components: {
        NavBar
    },
    data(){
        return{
            area: '',
            name: '',
            price: '',
            clauses: [],
            msg : '',
            data : '',
            show : true
        }
    },
    methods:{
        addclause(){
            this.clauses.push({
                value: '',
                showInputBox: true
            })
        },
        toggleInputBox(index){
            this.clauses[index].showInputBox = true
        },
        saveInputBox(index){
            this.clauses[index].showInputBox = false
        },
        handelfarmdata(){
            let data = {
                area: this.area,
                name: this.name,
                price: this.price,
            }
            let response = axios.post('/api/contract',data);
            response.then((res)=>{
                console.log(res.data);
                this.msg = res.data.message;
                this.data = res.data.data;
                this.show = false;
            })
        },
        handelclausis(){
            let data = {
                clauses: this.clauses,
                id: this.data.id
            }
            let response = axios.post('/api/contract/clauses',data);
            response.then((res)=>{
                console.log(res.data);
                this.msg = res.data.message;
            })
        }
    }

}
</script>
<style>

</style>
