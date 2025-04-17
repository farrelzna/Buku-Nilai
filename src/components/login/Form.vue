<template>
    <form @submit.prevent="proccesForm" class="card d-block mx-auto my-5 p-5 bg-light w-75 d-block m-auto">
        <div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Username</label>
                <input type="username" class="form-control" id="username" placeholder="Enter username"
                    v-model="username" @change="detectlenghtvalue">
                <small class="text-danger">{{ errorMessage.username }}</small>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password"
                    v-model="password">
                <small class="text-danger">{{ errorMessage.password }}</small>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
// import { userRouter } from 'vue-router';
// const router = userRouter();

export default {

    name: 'FormLogin', //identitas form
    data() {
        return {
            username: '',
            password: '',
            errorMessage: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        detectlenghtvalue() {
            if (this.username.length < 4) {
                this.errorMessage.username = 'Username minimal 4 karakter';
            } else {
                this.errorMessage.username = '';
            }
        },
        proccesForm() {
            if (!this.username) {
                this.errorMessage.username =
                    'Username tidak boleh kosong';
            }
            if (!this.password) {
                this.errorMessage.password =
                    'Password tidak boleh kosong';
            }
            if (this.username && this.password) {
                // siapkan data yang akan dicek
                const payload = {
                    username: this.username,
                    password: this.password
                }
                this.hitAxios('http://localhost:3000/users', payload);
            }
        },
       hitAxios(endpoint, payload) {
        axios.get(endpoint, {
            params: {
                username: payload.username,
                password: payload.password
            }
        })
        .then((response) => {
            if (response.data.length > 0) {
                localStorage.setItem('user', JSON.stringify(response.data[0]));
                // jika data ditemukan, redirect ke halaman home
                this.$router.push('/dashboard');
            } else {
                alert('gagal login, coba lagi !');
            }
        })
        .catch((error) => {
            console.log('Terjadi kesalahan saat login' , error);
            alert('gagal login, coba lagi !');
        });
       }
    }
}
</script>