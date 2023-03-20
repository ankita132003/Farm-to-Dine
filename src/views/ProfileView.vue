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
      <div class="card mt-5">
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
  background-color: rgb(215, 255, 167);
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
  background-image: url("data:image/jpeg;base64,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");
  background-repeat: no-repeat;
  background-size: 3000px;
}
.card{
  background-color: rgb(232, 255, 158);
}
</style>