<template>
    <h3>Account Information</h3>
    <form @submit.prevent="infoSubmit">
        <div class="mb-3">
            <label>First Name</label>
            <input v-model="userInfo.first_name" type="text" class="form-control" name="first_name">
        </div>
        <div class="mb-3">
            <label>Last Name</label>
            <input v-model="userInfo.last_name" type="text" class="form-control" name="last_name">
        </div>
        <div class="mb-3">
            <label>Email</label>
            <input v-model="userInfo.email" type="email" class="form-control" name="email">
        </div>

        <button class="btn btn-outline-secondary">Save</button>
    </form>

    <h3 class="mt-4">Change Password</h3>
    <form @submit.prevent="passwordSubmit">
        <div class="mb-3">
            <label>Password</label>
            <input v-model="passwordInfo.password" type="password" class="form-control" name="password">
        </div>
                <div class="mb-3">
            <label>Confirm Password</label>
            <input v-model="passwordInfo.password_confirm" type="password" class="form-control" name="password_confirm">
        </div>
        <button class="btn btn-outline-secondary">Save</button>
    </form>
</template>

<script lang="ts">
import {reactive, watch, computed} from 'vue';
import axios from 'axios';
import {useStore} from "vuex";

export default {
    name: "ProfilePage",
    setup() {
        const userInfo = reactive({
            first_name: '',
            last_name: '',
            email: ''
        });

        const passwordInfo = reactive({
            password: '',
            password_confirm: ''
        });
        const store = useStore();

        const user = computed(() => store.state.User.user)

        watch(user, () => {
            userInfo.first_name = user.value.first_name;
            userInfo.last_name = user.value.last_name;
            userInfo.email = user.value.email;
        });

        const infoSubmit = async () => {
            const {data} = await axios.put('users/info', userInfo);

            await store.dispatch('User/setUser', data);
        }

        const passwordSubmit = async () => {
            await axios.put('users/password', passwordInfo);
        }

        return {
            userInfo,
            passwordInfo,
            infoSubmit,
            passwordSubmit
        }
    }
}
</script>