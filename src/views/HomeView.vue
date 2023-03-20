
<template>
  <NavBar />

  <div>
    <div v-if="user">
      <div class="container m-2">
        <h2> User:{{ user.user }}</h2>
        <p>Email : {{ user.email }}</p>
        <p>Location : {{ latitude }},{{ longitude }}</p>
        <div class="row">
          <div class="col-md-6">
            <h4>Your Crop listings</h4>
        <ol>
          <div >
            <li  v-for="item  in crop" :key="item.id">
              <div class="card m-3">
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
          </div>
          <div class="col-md-6">
            <h4>Listings of local Service providers</h4>
        <ol>
          <div >
            <li  v-for="item  in listing" :key="item.id">
              <div class="card m-3">
                <div class="card-body">
                  <p> description : {{ item.description }}</p>
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
    </div>
  </div>
  <div v-else>
    <p>Loading user data... </p>
  </div>
  <button @click="locatorButtonPressed">Get Location</button>
</div></template>
<script>
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  data() {
    return {
      user: null,
      isfarmer: false,
      listing: [],
      latitude: '',
      longitude: '',
      crop : []
    }
  },
  computed: {
  },
  created() {
    if (!localStorage.getItem('tocken')) {
      console.log(this.$store.state.user)
      this.$router.push('/login')
    }

  },
  async mounted() {
    let response = await axios.get('/api/users/farmer')
    let user = response.data.data
    console.log(user)
    this.user = user
    this.isfarmer = user.isfarmer
    this.$store.dispatch('user', user)
    let response2 = await axios.get('/api/listing')
    let listing = response2.data
    console.log(listing.data)
    this.listing = listing.data
    let response3 = await axios.get('/api/crop')
    let crop = response3.data
    console.log(crop.data)
    this.crop = crop.data
  },
  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude);
          this.latitude = position.coords.latitude
          this.longitude = position.coords.longitude
          console.log(position.coords.longitude);
          let response = axios.post('/api/users/farmer/location', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
          response.then(res => {
            console.log(res)
          })
        },
        error => {
          console.log(error.message);
        },
      )
    }
  }


}
</script>
<style>
.farmer {
  text-align: center;
  background-color: antiquewhite;
}
</style>
