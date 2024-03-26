<template>
  <div>
    <header>
      <nav class="navbar">
        <img src="../assets/clamart.fr 2_0.svg" alt="Logo" class="logo">
      </nav>
    </header>

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
        { name: 'Ecole 3' },
        { name: 'Ecole 4' },
        { name: 'Ecole 5' },
        { name: 'Ecole 6' }
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

</style>
