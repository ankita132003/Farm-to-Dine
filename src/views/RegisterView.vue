<template>
    <div class="modal-body row">
        <div class="col-12 col-md-7 bg-image">
            <!-- Your first column here -->
            <div class="card align-middle" style="width:auto;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/India_Farming.jpg " class="card-img-top img"
                    alt="...">
            </div>

        </div>
        <div class="col-12 col-md-5 mt-4">

            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="mt-0">
                        <div class="card shadow zindex-100 mb-0">
                            <div class="card-body px-md-5 py-5">
                                <div class="mb-5">
                                    <h1>
                                        Register to create Board
                                    </h1>
                                    <div class="text-muted mb-0">
                                    <h5><router-link to="/login" class="router-link">Already have an account?
                                            Login</router-link></h5>
                                    </div>
                                </div>
                                <span class="clearfix"></span>
                                <form @submit.prevent="handleSubmit(e)">
                                    <div class="form-group">
                                        <label class="form-control-label">Username</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Username"
                                                v-model="username">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label">Email</label>
                                        <div class="input-group">
                                            <input type="email" class="form-control" placeholder="Email" v-model="email">
                                        </div>
                                    </div>

                                    <div class="form-group mb-0">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div>
                                                <label class="form-control-label">Password</label>
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <input type="password" class="form-control" placeholder="Password"
                                                v-model="password">

                                        </div>
                                    </div>
                                   
                                    <label class="checkbox-button">
                                        <h5><input type="checkbox" v-modal="isfarmer" @click="handleChecked">
                                            I'm a Farmer </h5>
                                    </label>
                                    <div>
                                        <h5><input type="checkbox" v-modal="isowner" @click="handleowner">
                                            I'm a Owner </h5>
                                    </div>
                                  
                                    <div class="mt-4">
                                        <button type="submit" style="color: aliceblue; background-color: black;"
                                            name="register" class="btn btn-block btn-primary">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'RegisterView',
    methods: {
        async handleSubmit() {
            const data = {
                username: this.username,
                email: this.email,
                password: this.password,
                isfarmer: this.isfarmer,
                isowner: this.isowner
            }
            console.log('data', data)
            const response = await axios.post('api/users/create', data)
            console.log('response', response)
            this.$router.push('/login')
        },
        handleChecked() {
            this.isfarmer = !this.isfarmer
        },
        handleowner() {
            this.isowner = !this.isowner
        }

    },
    data() {
        return {
            auth: false,
            username: '',
            email: '',
            password: '',
            isfarmer: false,
            isowner: false
        }
    }
}
</script>
<style scoped>
.router-link {
    color: black;
    text-decoration: none;
}

.router-link:hover {
    color: blue;
    text-decoration: underline;
}

.img {
    filter: blur(2px);
}</style>
