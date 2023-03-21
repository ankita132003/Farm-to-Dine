<template>
  <NavBar/>
  <form @submit.prevent="handleSubmit" class="back">
    <!-- header for lisisting -->
    <div class="header">
      <h1>List Your Service</h1>
      <hr />
    </div>
   
    <!-- form for listing services -->
    <div class="container ">
      <div class="card cardcolor mt-5">
        <div class="form-group mb-3 mt-3">
          <h5>
            <label for="name"> Enter your Name</label>
            <input
              type="text"
              class="form-control mt-1"
              id="name"
              placeholder="Enter name"
              v-model="name"
            />
          </h5>
        </div>
        <div class="form-group mb-3">
          <h5>
            <label for="description">Service Name</label>
            <input
              type="text"
              class="form-control mt-1"
              id="description"
              placeholder="Enter description"
              v-model="service_name"
            />
          </h5>
        </div>
        <div class="form-group mb-3">
          <h5>
            <label for="price">Price</label>
            <input
              type="text"
              class="form-control mt-1"
              id="price"
              placeholder="Enter price"
              v-model="price"
            />
          </h5>
        </div>
        <div class="form-group mb-3">
          <h5>
            <label for="category">Description</label>
            <input
              type="text"
              class="form-control mt-1"
              id="category"
              placeholder="Enter category"
              v-model="description"
            />
          </h5>
        </div>
        <div class="form-group mb-3">
          <h5>
            <label for="phone">phone</label>
            <input
              type="text"
              class="form-control mt-1"
              id="phone"
              placeholder="Enter phone"
              v-model="phone"
            />
          </h5>
        </div>
        <button type="submit" class="btn btn-primary form-group mb-3 ">Submit</button>
      </div>
    </div>
  </form>
</template>
<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
export default{
    name  : 'ListingView' ,
    components:{
        NavBar
    },
    data(){
        return{
            name:'',
            service_name:'',
            price:'',
            description:'',
            phone:'',
            latitude:'',
            longitude:'',
        }
    },
    methods:{
        handleSubmit(){
            const data = {
                name:this.name,
                service_name:this.service_name,
                price:this.price,
                description:this.description,
                phone:this.phone,
                latitude:this.latitude,
                longitude:this.longitude}
              let response =  axios.post('/api/listing',data)
              response.then((res)=>{
                  console.log(res)
                  this.$router.push('/')
              })
      
        }
    },
    mounted(){
        navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
        });
    }
} 
</script>
<style>
.header {
  text-align: center;
  background-color: beige;
}
.form-group {
  margin-left: 50px;
  margin-right: 50px;
}
.btn { 
  width: 100px;
  height: 50px;
  font-size: 20px;
}
.cardcolor{
  background-color: rgb(224, 180, 158);
}
.header{
  background-color: rgb(152, 71, 30);
  color: bisque;
}
.back{
  background-image: url("data:image/jpeg;base64,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");
  background-repeat: no-repeat;
  background-size: 3000px;
}
</style>