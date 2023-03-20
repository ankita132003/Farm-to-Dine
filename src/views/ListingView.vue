<template>
<form @submit.prevent="handleSubmit">
    <!-- form for listing services -->
    <div class="form-group">
        <label for="name"> Enter your Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="name">
    </div>
    <div class="form-group">
        <label for="description">service name</label>
        <input type="text" class="form-control" id="description" placeholder="Enter description">
    </div>
    <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="Enter price">
    </div>
    <div class="form-group">
        <label for="category">description</label>
        <input type="text" class="form-control" id="category" placeholder="Enter category">
    </div>
    <div class="form-group">
        <label for="image">phone</label>
        <input type="text" class="form-control" id="image" placeholder="Enter image">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>
<script>
import axios from 'axios';

export default{
    name  : 'ListingView' ,
    data(){
        return{
            name:'',
            service_name:'',
            price:'',
            description:'',
            phone:'',
            latitude:'',
            longitude:''


        }
    },
    methods:{
        handleSubmit(){
           let response = axios({
                method: 'post',
                url: 'api/listings',
                data: {
                    name: this.name,
                    service_name: this.service_name,
                    price: this.price,
                    description: this.description,
                    phone: this.phone,
                    latitude: this.latitude,
                    longitude: this.longitude,
                }
            })
            console.log(response)
        }
    }
} 
</script>