<template>
	<div>
		<header>
			<nav class="navbar">
				<img
					src="../assets/clamart.fr 2_0.svg"
					alt="Logo"
					class="logo"
				/>
			</nav>
		</header>
		<div class="dashboard-header">
			<button class="view-all-button">Voir toutes les écoles</button>
			<h1>DASHBOARD</h1>
			<div class="selectors">
				<select v-model="selectedSchool" class="school-selector">
					<option value="" disabled selected hidden>
						Sélectionner une école
					</option>
					<option v-for="(school, index) in schools" :key="index">
						{{ school.name }}
					</option>
				</select>
				<input
					type="date"
					v-model="selectedDate"
					class="date-selector"
				/>
			</div>
		</div>

		<div class="dashboard">
			<div class="dashboard-total">
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

				<div class="dashboard-section evolution">
					<h3>EVOLUTION PAR MOIS</h3>
				</div>

				<div class="dashboard-section global-view">
					<h3>VUE GLOBALE</h3>
					<div class="columns">
						<div class="column">
              <h4>Entrée</h4>
              <p>{{ entry }}G</p>
            </div>
						<div class="column">
							<h4>Plat</h4>
              <p>{{ mainCourse }}G</p>
						</div>
						<div class="column">
							<h4>Dessert</h4>
              <p>{{ dessert }}G</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			schools: [
				{ name: "CHARLES DE GAULLE" },
				{ name: "JEAN DE LA FONTAINE" },
				{ name: "LOUISE MICHEL" },
				{ name: "ROCHERS" },
				{ name: "JEAN MONNET" },
				{ name: "PLAINE SUD" },
			],
			selectedSchool: "",
			selectedDate: "",
			totalMonth: 0,
			selectedTime: "mois",
			stat1: 0,
			stat2: 0,
			totalDay: 0,
			entry: 0,
			mainCourse: 0,
			dessert: 0,
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
nav {
	background-color: #e42353;
	padding: 10px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 10px 20px;
	box-sizing: border-box;
}

.navbar {
	display: flex;
	justify-content: center;
}

.logo {
	width: 100px;
	height: auto;
}

.layer {
	background-color: rgba(255, 255, 255, 0.6);
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
}

.title {
	text-align: center;
}

.view-all-button {
	background-color: #fff;
	color: #322d29;
	border: none;
	padding: 5px;
	filter: drop-shadow(1px 1px 1px #322d29);
	border-radius: 5px;
	cursor: pointer;
	transition: transform 0.3s ease;
}

.view-all-button:hover {
	transform: scale(1.03);
}

.selectors {
	display: flex;
}

.school-selector,
.date-selector {
	margin-left: 10px;
	padding: 10px;
	border-radius: 5px;
	background: none;
	border: none;
	color: black;
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

.dashboard-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	width: 100%;
}

.dashboard {
	background-color: #fff;
	border-radius: 15px;
	padding: 10px 30px 30px 30px;
}

.total-month {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.dashboard-stats {
	display: flex;
  gap: 20px;
}

.stat-box {
  display: flex;
  justify-content: center;
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

.columns {
  display: flex;
	border-radius: 15px;
	padding: 0px 15px;
	width: 80%;
	background-color: #fff;
  gap: 20px;
	filter: drop-shadow(1px 2px 3px #b2b2b2);
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
