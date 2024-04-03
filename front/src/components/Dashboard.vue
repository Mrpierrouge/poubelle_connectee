<template>
	<div class="dashboard">
		<div class="dashboard-total">
			<DashboardTotal :pesee="this.pesee" :today="this.date"></DashboardTotal>
            <DashboardGlobalView :pesee="this.pesee" :today="this.date"></DashboardGlobalView>
		</div>
	</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import DashboardTotal from "../components/DashboardTotal.vue";
import DashboardGlobalView from "../components/DashboardGlobalView.vue";

export default {
	name: "Dashboard",
	components: {
		Navbar,
		DashboardTotal,
		DashboardGlobalView,
	},
	data() {
		return {
			pesee: [],
			ecole: "ecole1",
		};
	},
	props: {
		date: {
			type: Date,
			required: true,
		},
	},
	async created() {
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
