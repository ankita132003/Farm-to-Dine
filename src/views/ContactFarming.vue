<template>
    <NavBar/>
    <div class="container">
        <h1> Contract Farming Contract </h1>
<div class="card">
    <div class="card-body">
        <form @submit.prevent="handelfirmdata ">
        <div class="form-group mb-3 mt-3">
        <label >Area of farm</label>
        <input  class="form-control mt-1" type="text" name="area" placeholder="Enter area of farm" required v-modal="area">
        </div>
        <div class="form-group mb-3">
        <label>Duration of contract</label>
        <input   class="form-control mt-1" type="text" name="duration" placeholder="Enter duration of contract" required>
        </div>
        <div class="form-group mb-3">
        <label>Price per unit</label>
        <input  class="form-control mt-1" type="text" name="price" placeholder="Enter price per unit" required>
    </div>
    <input type="submit" class="btn btn-primary" value="Submit">
    </form>
    </div>
    <div class="m-3">
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
         </div>
</div>
  
</div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
export default{
    name  : "ContactFarming",
    components: {
        NavBar
    },
    data(){
        return{
            area: '',
            duration: '',
            price: '',
            clauses: []

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
        }
    }

}
</script>
<style>

</style>
