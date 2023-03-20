<template>
  <NavBar />
  
  <div>
    <h1 v-if="isfarmer">Farmer</h1>
    <div v-if="user">
      <h2>{{ user.user}}</h2>
      <p>{{ user.email }}</p>
      <p>{{ user.id }}</p>
      <p>{{ user.latitude }}</p>
      <p>{{ user.longitude }}</p>
    </div>
    <div v-else>
      <p>Loading user data...</p>
    </div>
    <button @click="locatorButtonPressed">Get Location</button>
  </div>
</template>
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
      isfarmer: false
    }
  },
  computed: {
  },
  created(){
    if (!localStorage.getItem('tocken'))  {
      console.log(this.$store.state.user)
      this.$router.push('/login')
    }

  },
  async mounted(){
    let response  =  await axios.get('/api/users/farmer')
    let user  =  response.data.data
    console.log(user)
    this.user = user
    this.isfarmer = user.isfarmer
    this.$store.dispatch('user' , user)
    let response2  =  await axios.get('/api/listing')
    let listing  =  response2.data.data
    console.log(listing)
  },
  methods: {
  locatorButtonPressed() {
  navigator.geolocation.getCurrentPosition(
     position => {
       console.log(position.coords.latitude);
       console.log(position.coords.longitude);
       let response  = axios.post('/api/users/farmer/location' , {
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
