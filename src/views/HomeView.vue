<template>
  <NavBar />
  <div>
    <!-- <h1 v-if="isfarmer" class="farmer"> Farmer</h1> -->
    <!-- <hr> -->
    <div v-if="user" class="farmer">
      <h2 >{{ user.user}}</h2>
      <h4><p>{{ user.email }}</p></h4>
      <hr>
      <!-- <p>{{ user.id }}</p> -->
    </div>
    <div v-else>
      <p>Loading user data...</p>
    </div>
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
  },
 
}
</script>
<style>
  .farmer{
    text-align: center;
    background-color: antiquewhite;
  }



</style>
