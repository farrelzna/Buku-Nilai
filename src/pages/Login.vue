<template>
    <FormLogin></FormLogin>
</template>

<script>
import FormLogin from '../components/login/Form.vue'
export default {
    name: "LoginPage", 
    //Identitas Component // mendaftarkan component yang akan digunakan di halaman ini, isisnya sama dengan nama di import
    components: {
        FormLogin
    }
}
</script>