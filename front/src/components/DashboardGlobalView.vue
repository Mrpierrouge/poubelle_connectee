<template>
  <div class="dashboard-section global-view">
    <h3>VUE GLOBALE</h3>
    <div class="columns">
      <div class="column">
        <h4>Entrée</h4>
        <p>{{ entreeDay }}G</p>
      </div>
      <div class="column">
        <h4>Plat</h4>
        <p>{{ platDay }}G</p>
      </div>
      <div class="column">
        <h4>Dessert</h4>
        <p>{{ dessertDay }}G</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
