<template>
    <div class="modal-body row">
            <div class="col-12 col-md-7">
              <div class="card align-middle" style="width:auto;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/India_Farming.jpg " class="card-img-top blur" alt="..."></div>
            </div>
            <div class="col-12 col-md-5 mt-4">
                <div class="container middle ">
                    <div class="row align-items-center justify-content-center ">
                        <div>
                            <div class="card shadow zindex-100 mb-0">
                                <div class="card-body">
                                    <div class="mb-5 form-body">
                                        <div class="ml-4 justify-content-center">
                                            <h2> WELCOME !</h2>
                                        </div>
                                        <div  v-if="error"  class="alert alert-danger">{{ error }}</div> 
                                        
                                        <h6 class="h3">
                                     Login To Your Account
                                        </h6>
                                        <p class="text-muted mb-0 link">
                                              <router-link to="/register" class="router-link"> <h5> Create new account </h5></router-link>
                                        </p>
                                    </div>
                                    <span class="clearfix"></span>
                                    <form @submit.prevent="handelLogin(e)" class="mt-4">
        
        
                                        <div class="form-group">
                                            <label class="form-control-label">Username</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Username" name="username" required v-model="username
                                                ">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group mb-1 mt-2">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <label class="form-control-label">Password</label>
                                                </div>
                                            </div>
                                            <div class="input-group">
                                              <input type="password" class="form-control" placeholder="Password" name="password" required v-model="password">
                                            </div>
                                        </div>
        
                                        <div class="mt-4 form-body">
                                            <button type="submit"  name="login" class="btn btn-block btn-primary">Sign in</button></div>
                                    </form>
                                    <p class="text-muted mb-0 link">
                                              <router-link to="/listing" class="router-link"> <h5> List Services </h5></router-link>
                                </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>

</template>
<script>
import axios from 'axios';

export default {
  name: 'LoginView',
  data() {
    return {
    error: '',
    username: '',
    password: ''

    }
  },
  methods :{
    async handelLogin(){
        try{
        const response = await axios.post('api/users/login', {
            username: this.username,
            password: this.password
        })
        console.log(response)
        localStorage.setItem('tocken' , response.data.data.id)
        localStorage.setItem('user' , response.data.data.user)
        localStorage.setItem('email' , response.data.data.email)
        localStorage.setItem('id',response.data.data.id)
        localStorage.setItem('role', response.data.data.isfarmer)
        if(response.status === 200){
            this.$router.push('/')
        }
    }catch(error){
        this.error = error.response.data.message
    }
    
  }
}
}
</script>
<style>
    .modal-body{
        /* background-color: #f5f5f5; */
        background-color: white;
    }
    .router-link{
        color: black;
        text-decoration: none;
    }
    .router-link:hover{
        color: blue;
        text-decoration:underline;
    }
    .blur{
        filter: blur(2px);
    }
    .form-body{
        /* margin-top: 50px; */
        text-align: center;
    }
    .middle{
        margin-top: 20px;
    }
</style>