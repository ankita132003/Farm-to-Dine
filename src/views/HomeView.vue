<template>
  <NavBar/>
  <div v-if ='isfarmer'>
    <div v-if="user">
      <div class="container">
        <div>
        <h2>{{ user.user }}</h2>
        <p> {{ user.email }}</p>
        <p>Location : {{ latitude }},{{ longitude }}</p>
        <button @click="locatorButtonPressed">Get Location</button>
      </div>
        <hr>
        <div class="row">
          <div class="col-md-6">
            <h4>Your Crop listings</h4>
            <!-- <div class="card m-3">
              <div class="card-body"> -->
                <ol>
                  <div>
                    <li v-for="item in crop" :key="item.id">
                      <div class="card crop m-3">
                      <div class="card-body">
                      <p>Crop Name : {{ item.name }}</p>
                      <p>Price : {{ item.price }}</p>
                      <p>Area : {{ item.area }}</p>
                      <p>Phone number : {{ item.phone }}</p>
                      <p>Location : {{ item.latitude }},{{ item.longitude }}</p>
                      </div>
                      </div>
                    </li>
                  </div>
                </ol>
              <!-- </div>
            </div> -->
          </div>
          <div class="col-md-6">
            <h4>Listings of local Service providers</h4>
            <ol>
              <div>
                <li v-for="item in listing" :key="item.id">
                  <div class="card service m-3">
                    <div class="card-body">
                      <p>description : {{ item.description }}</p>
                      <p>Price : {{ item.price }}</p>
                      <p>Service : {{ item.service_name }}</p>
                      <p>Provide Name : {{ item.name }}</p>
                      <p>Phone number : {{ item.phone }}</p>
                      <p>Location : {{ item.latitude }},{{ item.longitude }}</p>
                    </div>
                  </div>
                </li>
              </div>
            </ol>
          </div>
        </div>
        <div v-if="isowner" class="m-3">
    <LandOwner  :contract=contract />
  </div>
      </div>
    </div>
    <div v-else>
      <p>Loading user data...</p>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import LandOwner from "@/components/LandOwner.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    NavBar,
   LandOwner
  },
  data() {
    return {
      user: null,
      isfarmer: '',
      isowner:'',
      listing: [],
      latitude: "",
      longitude: "",
      crop: [],
      contract: [],
    };
  },

  computed: {},
  created() {
    if (!localStorage.getItem("tocken")) {
      console.log(this.$store.state.user);
      this.$router.push("/login");
    }
  },
  async mounted() {
    let response = await axios.get("/api/users/farmer");
    let user = response.data.data;
    console.log('user : ',user);
    this.user = user;
    this.isfarmer = user.isfarmer;
    this.isowner = user.isowner;
    let response2 = await axios.get("/api/listing");
    let listing = response2.data;
    console.log(listing.data);
    this.listing = listing.data;
    let response3 = await axios.get("/api/crop");
    let crop = response3.data;
    console.log(crop.data);
    this.crop = crop.data;

    let response4 = await axios.get("/api/contract");
    let contract = response4.data;
    console.log('contracts',contract.data);
    this.contract = contract.data;

  },
  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude);
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log(position.coords.longitude);
          let response = axios.post("/api/users/farmer/location", {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          response.then((res) => {
            console.log(res);
          });
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },
};
</script>
<style>
.farmer {
  text-align: center;
  background-color: antiquewhite;
}
.service {
  background-color: rgb(227, 187, 216);
}
.crop {
  background-color: rgb(209, 238, 228);
}
</style>
