<template>
  <div>
    <header>
      <nav class="navbar">
        <img src="../assets/clamart.fr 2_0.svg" alt="Logo" class="logo">
      </nav>
    </header>
<div class="dashboard"></div>
    <div class="dashboard-header">
      <button class="view-all-button">Voir toutes les écoles</button>
      <h1>DASHBOARD</h1>
      <div class="selectors">
        <select v-model="selectedSchool" class="school-selector">
          <option v-for="(school, index) in schools" :key="index">{{ school.name }}</option>
        </select>
        <input type="date" v-model="selectedDate" class="date-selector">
      </div>
    </div>

    <div class="dashboard">
      <div class="dashboard-section total-month">
        <h2>TOTAL DU MOIS: {{ totalMonth }}G</h2>
        <div class="time-selector">
          <select v-model="selectedTime" class="time-selector">
            <option value="semaine">Semaine</option>
            <option value="mois">Mois</option>
            <option value="année">Année</option>
          </select>
        </div>
      </div>

      <div class="dashboard-stats">
        <div class="stat-box">
          <p>S-1 : {{ stat1 }}%</p>
          <img src="../assets/fleche_bas.png" alt="Flèche vers le bas" class="arrow-down">
        </div>
        <div class="stat-box">
          <p>M-1 : {{ stat2 }}%</p>
          <img src="../assets/fleche_haut.png" alt="Flèche vers le haut" class="arrow-up">
        </div>
        <div class="stat-box">
          <p>TOTAL DU JOUR : {{ totalDay }}G</p>
        </div>
      </div>

      <div class="dashboard-section evolution">
        <h2>EVOLUTION PAR MOIS</h2>
      </div>

      <div class="dashboard-section global-view">
        <h2>VUE GLOBALE</h2>
        <div class="columns">
          <div class="column">
            <h3>Entrée: {{ entry }}G</h3>
          </div>
          <div class="column">
            <h3>Plat: {{ mainCourse }}G</h3>
          </div>
          <div class="column">
            <h3>Dessert: {{ dessert }}G</h3>
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
        { name: 'CHARLES DE GAULLE' },
        { name: 'JEAN DE LA FONTAINE' },
        { name: 'LOUISE MICHEL' },
        { name: 'ROCHERS' },
        { name: 'JEAN MONNET' },
        { name: 'PLAINE SUD' }
      ],
      selectedSchool: '',
      selectedDate: '',
      totalMonth: 0,
      selectedTime: 'mois',
      stat1: 0,
      stat2: 0,
      totalDay: 0,
      entry: 0,
      mainCourse: 0,
      dessert: 0
    };
  }
}
</script>

<style>
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
	width: 100%;
	height: 100%;
}

.title {
	text-align: center;
	margin-top: 20px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
}

.view-all-button {
  background-color: rgb(50, 45, 41);
  color: #fff;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.view-all-button:hover {
  transform: scale(1.03);
}

.dashboard-header h1 {
  font-size: 24px;
}

.selectors {
  display: flex;
}

.school-selector, .date-selector {
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
}

.dashboard {
  padding: 20px;
}

.dashboard-section {
  margin-top: 20px;
}

.dashboard-section h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.dashboard-stats {
  display: flex;
  justify-content: space-between;
}

.stat-box {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}

.arrow-down, .arrow-up {
  width: 20px;
  height: 20px;
  margin-top: 10px;
}

.columns {
  display: flex;
}

.column {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin-right: 10px;
}

.column:last-child {
  margin-right: 0;
}
</style>

