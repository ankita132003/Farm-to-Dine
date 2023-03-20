<template>
  <div class="m-2">
    <h3>Advance Features</h3>
    <hr />
    <button class="btn btn-primary" @click="ContactFarming">
      Contact Farming
    </button>
  </div>
  <div>
    <h3>Your Active Contracts</h3>
    <hr>
    <div class="row">
      <div class="col-md-4 " v-for="(items, index) in contract" :key="index">
        <div class="card m-3 p-2 contractors" style="width: 20rem, height:20rem">
          <p>Name : {{ items.name }}</p>
          <p>Area : {{ items.area }}</p>
          <p>Min Price : {{ items.price }}</p>
          <button class="btn btn-primary" @click="ContactFarming">
            View Bids & Clause
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandOwner",
  props: {
    contract: Object,
  },
  data() {
    return {
      crop: [],
      listing: [],
      user: {},
    };
  },
  methods: {
    ContactFarming() {
      this.$router.push({ name: "ContactFarming" });
    },
  },
};
</script>
<style>
    .btn{
        margin-bottom: 30px;
        width: 200px;
        height: 43px;
        font-size: 18px;
        
    }
    .contractors{
        background-color: #DDFFD9;
    }
</style>
