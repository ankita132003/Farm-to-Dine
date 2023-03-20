<template>
<NavBar/>
   <form @submit.prevent="handleSubmit" class="color">
    <!-- header for lisisting -->
    <div class="header">
      <h1>Create Your crop portfolio</h1>
      <hr />
    </div>
    <!-- form for listing services -->
    <div class="container">
      <div class="card cardcolor mt-5">
        <div class="form-group mb-3 mt-3">
          <h5>
            <label for="name">Name</label>
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
            <label for="category">Area</label>
            <input
              type="text"
              class="form-control mt-1"
              id="category"
              placeholder="area"
              v-model="area"
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
              placeholder="your contact number"
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
import axios from 'axios';

import NavBar from '../components/NavBar.vue';
export default {
  name :'ProfileView',
  components: {
    NavBar,
  },
  data() {
    return {
      name: '',
      price: '',
      area: '',
      phone: '',
      latitude : '',
      longitude : ''
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        name: this.name,
        price: this.price,
        area: this.area,
        phone: this.phone,
        latitude : this.latitude,
        longitude : this.longitude
      };
      let response =axios.post('/api/crop', data);
      response.then((res) => {
        console.log(res);
      });
    },
  },
  mounted(){
    navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude);
          this.latitude = position.coords.latitude
          this.longitude = position.coords.longitude
          console.log(position.coords.longitude);
        },
      );
  }
}
</script>
<style>
  .header {
  text-align: center;
  background-color: rgb(199, 244, 145);
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
.color{
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFsk7sjVQEj4R19UlmgWoOQTL24L8Vt-MLXQ&usqp=CAU");
  background-repeat: no-repeat;
  background-size: 3000px;
}
.cardcolor{
  background-color: rgb(232, 255, 158);
}
</style>