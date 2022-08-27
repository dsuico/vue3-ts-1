<template>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a>
        <div class="navbar-nav">
            <div class="nav-item d-flex">
                <router-link to="/profile" class="nav-link px-3">{{name}}</router-link>
                <router-link to="/login" class="nav-link px-3" @click="logout">Sign out</router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import store from "@/store";
import axios from "axios";
import {ref, computed, watch} from "vue";
import {useStore} from "vuex";
export default {
    name: "NavBarComponent",
        setup() {
            const name = ref('');
            const store = useStore();

            const user = computed(() => store.state.User.user)

            watch(user, () => {
                name.value = user.value.first_name + ' ' + user.value.last_name
            });

            const logout = async () => {
                await axios.post('logout');
            }

            return {
                name,
                logout
            };
        }
}
</script>