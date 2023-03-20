<template>
  <form @submit.prevent="handleSubmit">
    <!-- header for lisisting -->
    <div class="header">
      <h1>List Your Service</h1>
      <hr />
    </div>

    <!-- form for listing services -->
    <div class="container">
      <div class="card mt-5">
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
        <button type="submit" class="btn btn-primary mb-3">Submit</button>
      </div>
    </div>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "ListingView",
  data() {
    return {
      name: "",
      service_name: "",
      price: "",
      description: "",
      phone: "",
      latitude: "",
      longitude: "",
    };
  },
  methods: {
    handleSubmit() {
      let response = axios({
        method: "post",
        url: "api/listings",
        data: {
          name: this.name,
          service_name: this.service_name,
          price: this.price,
          description: this.description,
          phone: this.phone,
          latitude: this.latitude,
          longitude: this.longitude,
        },
      });
      console.log(response);
    },
  },
};
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
  margin-left: 1145px;
  width: 100px;
  height: 50px;
  font-size: 20px;
}
</style>
