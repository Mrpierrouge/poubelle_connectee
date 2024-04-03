<template>
  <div class="dashboard-header">
    <router-link to="/" class="view-all-button">Voir toutes les écoles</router-link>
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
      <input type="date" v-model="date" class="date" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader',
  data() {
    return {
      schools: [
        { name: "CHARLES_DE_GAULLE" },
        { name: "JEAN_DE_LA_FONTAINE" },
        { name: "LOUISE_MICHEL" },
        { name: "ROCHERS" },
        { name: "JEAN_MONNET" },
        { name: "PLAINE_SUD" },
      ],
      date: new Date().toISOString().substring(0, 10),
      selectedSchool: this.school,
    };
  },
  props: {
    school: {
      type: String,
      required: true,
    },
  },
  watch: {
    date(newVal, oldVal) {
      console.log("La nouvelle date sélectionnée est: ", newVal);
      this.updateDate(newVal);
    },
    selectedSchool(newVal, oldVal) {
      console.log("La nouvelle école sélectionnée est: ", newVal);
      this.updateSchool(newVal);
    }
  },
  methods: {
    updateDate(newDate) {
      this.$emit("update-date", newDate);
    },
    updateSchool(newSchool) {
      this.$emit("update-school", newSchool);
    }
  }
};
</script>

<style scoped>
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
  flex-direction: column;
}

.school-selector,
.date {
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  background: none;
  border: none;
  color: black;
}
</style>
