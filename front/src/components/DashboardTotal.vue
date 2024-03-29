<template>
  <div class="dashboard-section total-month">
    <h3>TOTAL DU MOIS: G</h3>

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
    selectType(type) {
      pesee.forEach((poids) => {
        if (poids.type === type) {
          return poids.poids;
        }
      });
    },
  },
  props: {
    pesee: {
      type: Array, // Type de la prop
      required: true, // La prop est obligatoire
    },
  },
  computed: {
    totalDay() {
      let total = 0;
      this.pesee.forEach((poids) => {
        total += poids.poids;
      });
      return total;
    },
    entreeDay() {
      const entreePoids = this.pesee.find((poids) => poids.type === "entree");
      return entreePoids ? entreePoids.poids : 0;
    },
    platDay() {
      const platPoids = this.pesee.find((poids) => poids.type === "plat");
      return platPoids ? platPoids.poids : 0;
    },
    dessertDay() {
      const dessertPoids = this.pesee.find((poids) => poids.type === "dessert");
      return dessertPoids ? dessertPoids.poids : 0;
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
