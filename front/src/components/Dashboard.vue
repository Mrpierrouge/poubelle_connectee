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
	props: {
		date: {
			type: Date,
			required: true,
		},
		pesee: {
			type: Array,
			required: true,
		},
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
