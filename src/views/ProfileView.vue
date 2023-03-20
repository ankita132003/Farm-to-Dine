<template>
   <form @submit.prevent="handleSubmit">
    <!-- header for lisisting -->
    <div class="header">
      <h1>.....</h1>
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
            <label for="description">Description</label>
            <input
              type="text"
              class="form-control mt-1"
              id="description"
              placeholder="Enter description"
              v-model="description"
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

export default {
  name :'ProfileView'
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
</style>