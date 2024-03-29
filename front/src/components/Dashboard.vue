<template>
	<h2 v-if="pesee">{{ pesee }}</h2>
	<div class="dashboard">
		<div class="dashboard-total">
			<DashboardTotal />
            <DashboardStats />
            <DashboardEvolution />
            <DashboardGlobalView />
		</div>
	</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import DashboardTotal from "../components/DashboardTotal.vue";
import DashboardStats from "../components/DashboardStats.vue";
import DashboardEvolution from "../components/DashboardEvolution.vue";
import DashboardGlobalView from "../components/DashboardGlobalView.vue";

export default {
	name: "Dashboard",
	components: {
		Navbar,
		DashboardTotal,
		DashboardStats,
		DashboardEvolution,
		DashboardGlobalView,
	},
	data() {
    return {
		pesee: [],
    };
  },
	async created() {
          let ecole = "ecole1";
          let date = new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() + 1
          );
          try {
            const response = await fetch("http://localhost:3000/ecoles/date/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                date,
                ecole,
              }),
            });
            const jsonData = await response.json();
            this.pesee = jsonData;
			console.log(this.pesee);
          } catch (error) {
            console.error("Une erreur s'est produite : ", error);
          }
        },
};

</script>

<style scoped>
.dashboard {
	background-color: #fff;
	border-radius: 15px;
	padding: 10px 30px 30px 30px;
	gap: 20px;
}
</style>
