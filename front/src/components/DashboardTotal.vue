<template>
	<div class="dashboard-section total-month">
		<h3>TOTAL DU MOIS: {{ totalMonth }}G</h3>
		<div class="time-selector">
			<div
				class="toggle-button"
				:class="{ active: selectedOption === 'Semaine' }"
				@click="selectOption('Semaine')"
			>
				Semaine
			</div>
			<div
				class="toggle-button"
				:class="{ active: selectedOption === 'Mois' }"
				@click="selectOption('Mois')"
			>
				Mois
			</div>
			<div
				class="toggle-button"
				:class="{ active: selectedOption === 'Année' }"
				@click="selectOption('Année')"
			>
				Année
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			totalMonth: 0,
            selectedTime: "mois",
            selectedOption: null,
		};
	},
	methods: {
		selectOption(option) {
			this.selectedOption = option;
		},
	},
};
</script>

<style scoped>

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
</style>
