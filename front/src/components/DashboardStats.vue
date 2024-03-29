<template>
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
</template>

<script>
export default {
  data() {
    return {
      stat1: 0,
      stat2: 0,
    };
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
