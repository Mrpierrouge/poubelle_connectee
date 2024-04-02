<template>
  <div class="title">
    <h1>NOS ECOLES</h1>
    <div class="card-grid">
      <school-card v-for="(school, index) in schools" :key="index" :school="school" />
    </div>
  </div>
</template>

<script>
import SchoolCard from '../components/SchoolCards.vue';

export default {
  components: {
    SchoolCard
  },
  props: {
    schools: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  margin-top: 20px;
}

@media (min-width: 1024px) {
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }
}

@media (max-width: 1024px) {
  .card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 20px;
  }
}
</style>
