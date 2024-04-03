<template>
  <div class="container">
    <Navbar />
    <DashboardHeader @update-date="updateDate"/>
    <Dashboard :date="this.date"></Dashboard>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import DashboardHeader from '../components/DashboardHeader.vue';
import Dashboard from '../components/Dashboard.vue';

export default {
  name: 'DashboardView',
  components: {
    Navbar,
    DashboardHeader,
    Dashboard
  },
  methods: {
    updateDate(newDate) {
      this.date = newDate;
    }
  },
  data() {
    return {
      date: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
    };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
