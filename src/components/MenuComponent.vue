<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link to="/" active-class="active" class="nav-link">
                    Dashboard
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/users" active-class="active" class="nav-link">
                    Users
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/roles" active-class="active" class="nav-link">
                    Roles
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/products" active-class="active" class="nav-link">
                    Products
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/orders" active-class="active" class="nav-link">
                    Orders
                </router-link>
            </li>
        </ul>
    </div>
    </nav>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>