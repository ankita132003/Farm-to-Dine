<template>
  <NavBar />
  <div v-if="isfarmer">
    <div v-if="user">
      
        <div class="start">
          <div class="text">
            <h1>{{ user.user }}</h1>
            <p class="paraText">{{ user.email }}</p>
            <p class="paraText">Location : {{ latitude }},{{ longitude }}</p>
            <button @click="locatorButtonPressed" class="btn btn-primary">
              Get Location
            </button>
          </div>
          <hr>
        </div>
        <div class="img">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3>Your Crop listings</h3>
              <hr />
              <ol>
                <div>
                  <li v-for="item in crop" :key="item.id">
                    <div class="card crop m-3">
                      <div class="card-body">
                        <p>Crop Name : {{ item.name }}</p>
                        <p>Price : {{ item.price }}</p>
                        <p>Area : {{ item.area }}</p>
                        <p>Phone number : {{ item.phone }}</p>
                        <p>
                          Location : {{ item.latitude }},{{ item.longitude }}
                        </p>
                      </div>
                    </div>
                  </li>
                </div>
              </ol>
            </div>
            <div class="col-md-6">
              <h3>Listings of local Service providers</h3>
              <hr />
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
                        <p>
                          Location : {{ item.latitude }},{{ item.longitude }}
                        </p>
                      </div>
                    </div>
                  </li>
                </div>
              </ol>
            </div>
          </div>
          <div v-if="isowner" class="m-3">
            <LandOwner :contract="contract" />
          </div>
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
    LandOwner,
  },
  data() {
    return {
      user: null,
      isfarmer: "",
      isowner: "",
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
    console.log("user : ", user);
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
    console.log("contracts", contract.data);
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
  background-color: #ecc8ae;
}
.crop {
  background-color: #d7907b;
}
.start {
  background-color: #946380;
  /* margin-bottom: 0px; */
}
.text {
  margin-left: 50px;
  margin-bottom: 0px;
  padding: 0px;
}
.paraText {
  font-size: 25px;
}
.img{
background-image: url("data:image/jpeg;base64,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");
background-repeat: no-repeat;
/* width: 1000px; */
background-size: 3000px;
}


</style>
