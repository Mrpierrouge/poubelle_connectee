<template>
  <div class="container">
    <Navbar />
    <DashboardHeader @update-date="updateDate" @update-school="updateSchool" :school="this.ecole"/>
    <Dashboard :date="new Date(this.date)" :pesee="this.pesee"></Dashboard>
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
    },
    updateSchool(newSchool) {
      this.ecole = newSchool;
      this.Fetch();
    },
    async Fetch() {
			try {
            const response = await fetch(`http://localhost:3000/ecoles/${this.ecole}`)
			.then((response) => response.json())
			.then((data) => {
				this.pesee = data;
			})
          } catch (error) {
            console.error("Une erreur s'est produite : ", error);
          }
		},
  },
  data() {
    return {
      date: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
      ecole: "",
      pesee: [],
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
