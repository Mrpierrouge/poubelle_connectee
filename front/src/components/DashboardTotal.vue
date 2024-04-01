<template>
	<div class="dashboard-section total-month">
		<h3>TOTAL DU MOIS: {{ totalMonth }}G</h3>
		<div class="time-selector">
			<div
				class="toggle-button"
				:class="{ active: selectedOption === 'Semaine' }"
				@click="loadChart1('Semaine')"
			>
				Semaine
			</div>
			<div
				class="toggle-button"
				:class="{ active: selectedOption === 'Mois' }"
				@click="loadChart2('Mois')"
			>
				Mois
			</div>
			<div
				class="toggle-button"
				:class="{ active: selectedOption === 'Année' }"
				@click="loadChart3('Année')"
			>
				Année
			</div>
		</div>
	</div>
	<div class="dashboard-stats">
		<div class="stat-box">
			<p>S-1 : {{ stat1 }}%</p>
			<img
				src="../assets/fleche_bas.png"
				alt="Flèche vers le bas"
				class="arrow-down"
			/>
		</div>
		<div class="stat-box">
			<p>M-1 : {{ stat2 }}%</p>
			<img
				src="../assets/fleche_haut.png"
				alt="Flèche vers le haut"
				class="arrow-up"
			/>
		</div>
		<div class="stat-box">
			<p>TOTAL DU JOUR : {{ totalDay }}G</p>
		</div>
	</div>
	<div class="dashboard-section">
		<h3>EVOLUTION</h3>
		<div class="evolution">
			<canvas class="chart" ref="myChart" width="200" height="200"></canvas>
		</div>
	</div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
	data() {
		return {
			stat1: 0,
			stat2: 0,
			totalDay: 0,
			totalMonth: 0,
			selectedOption: "",
			chartInstance: null,
		};
	},
	methods: {
		loadChart1(option) {
			this.selectedOption = option;
			if (this.chartInstance) this.chartInstance.destroy();
			let ctx = this.$refs.myChart.getContext("2d");
			this.chartInstance = new Chart(ctx, {
				type: "line",
				data: {
					labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
					datasets: [
						{
							label: "Evolution de la semaine",
							data: [65, 59, 80, 81, 56],
							fill: false,
							borderColor: "rgb(75, 192, 192)",
							tension: 0.1,
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				},
			});
		},
		loadChart2(option) {
			this.selectedOption = option;
			if (this.chartInstance) this.chartInstance.destroy();
			let ctx = this.$refs.myChart.getContext("2d");
			this.chartInstance = new Chart(ctx, {
				type: "line",
				data: {
					labels: [
						"Semaine 1",
						"Semaine 2",
						"Semaine 3",
						"Semaine 4",
					],
					datasets: [
						{
							label: "Evolution du mois",
							data: [65, 59, 80, 81],
							fill: false,
							borderColor: "rgb(75, 192, 192)",
							tension: 0.1,
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				},
			});
		},

		loadChart3(option) {
			this.selectedOption = option;
			if (this.chartInstance) this.chartInstance.destroy();
			let ctx = this.$refs.myChart.getContext("2d");
			this.chartInstance = new Chart(ctx, {
				type: "line",
				data: {
					labels: [
						"Septembre",
						"Octobre",
						"Novembre",
						"Décembre",
						"Janvier",
						"Février",
						"Mars",
						"Avril",
						"Mai",
						"Juin",
						"Juillet",
					],
					datasets: [
						{
							label: "Evolution de l'année",
							data: [65, 59, 80, 81, 56, 55, 40, 68, 70, 75, 80],
							fill: false,
							borderColor: "rgb(75, 192, 192)",
							tension: 0.1,
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				},
			});
		},
	},
};
</script>

<style scoped>

.evolution {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	padding: 0px 15px;
	max-width: 400px;
	max-height: 300px;
	background-color: #fff;
	filter: drop-shadow(1px 2px 3px #b2b2b2);
}

.total-month {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.time-selector {
	border-radius: 30px;
	padding: 0px 5px;
	gap: 10px;
	width: fit-content;
	background-color: #fff;
	filter: drop-shadow(1px 2px 3px #b2b2b2);
}

.toggle-button {
	display: inline-block;
	cursor: pointer;
	user-select: none;
	border-radius: 30px;
	padding: 2px 5px;
	margin-right: 5px;
}

.active {
	background-color: #b2b2b2;
	padding: 0px 5px;
	color: #fff;
}

.dashboard-stats {
	display: flex;
	gap: 20px;
}

.stat-box {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	padding: 0px 15px;
	width: fit-content;
	background-color: #fff;
	filter: drop-shadow(1px 2px 3px #b2b2b2);
}

.arrow-down,
.arrow-up {
	width: 20px;
	height: 20px;
	margin-top: 10px;
}

</style>
