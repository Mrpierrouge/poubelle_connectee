<template>
  <div class="container">
    <Navbar />
    <DashboardHeader />
    <Dashboard />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import DashboardHeader from '../components/DashboardHeader.vue';
import Dashboard from '../components/Dashboard.vue';

export default {
  components: {
    Navbar,
    DashboardHeader,
    Dashboard
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
